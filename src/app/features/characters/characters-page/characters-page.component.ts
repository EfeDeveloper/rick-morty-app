import { Component, computed, signal } from '@angular/core';
import { CharactersTableComponent } from '@/features/characters/characters-table/characters-table.component';

import { CommonModule } from '@angular/common';
import { FiltersBarComponent } from '../../filters-bar/filters-bar.component';
import { FavoriteBarComponent } from '@/features/favorite-bar/favorite-bar.component';
import { CharacterDetailComponent } from '@/features/characters/character-detail/character-detail.component';
import { addFavorite } from '@/store/favorite/favorite.actions';
import { CharacterService } from '@/core/services/character.service';
import { TotalsBarComponent } from '@/features/totals-bar/totals-bar.component';
import { Store } from '@ngrx/store';
import { CharacterGraphqlService } from '@/core/services/character-graphql.service';

@Component({
  selector: 'app-characters-page',
  imports: [
    CommonModule,
    CharactersTableComponent,
    FiltersBarComponent,
    FavoriteBarComponent,
    CharacterDetailComponent,
    TotalsBarComponent,
  ],
  templateUrl: './characters-page.component.html',
})
export class CharactersPageComponent {
  displayedColumns: string[] = [
    'favorite',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'created',
    'actions',
  ];
  dataSource = signal<any[]>([]);
  characterDetail = signal<any | null>(null);
  loadingDetail = signal(false);
  errorDetail = signal<any | null>(null);
  filterName = signal('');
  filterStatus = signal('');

  pageSize = 10;
  pageIndex = signal(0);
  totalResults = signal(0);

  speciesTotals = computed(() => {
    const result: { [species: string]: number } = {};
    for (const char of this.dataSource()) {
      const key = char.species || 'Desconocido';
      result[key] = (result[key] || 0) + 1;
    }
    return result;
  });

  constructor(
    private characterService: CharacterService,
    private characterGraphql: CharacterGraphqlService,
    private store: Store
  ) {}

  typeTotals = computed(() => {
    const result: { [type: string]: number } = {};
    for (const char of this.dataSource()) {
      const key = char.type || 'Desconocido';
      result[key] = (result[key] || 0) + 1;
    }
    return result;
  });

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.characterService
      .getCharacters({
        name: this.filterName(),
        status: this.filterStatus(),
        page: this.pageIndex() + 1,
      })
      .subscribe({
        next: (res) => {
          this.dataSource.set(res.results);
          this.totalResults.set(res.info.count);
        },
        error: () => {
          this.dataSource.set([]);
          this.totalResults.set(0);
        },
      });
  }

  loadCharacterDetail(character: any) {
    this.loadingDetail.set(true);
    this.errorDetail.set(null);

    this.characterGraphql.getCharacterDetail(character.id).subscribe({
      next: (detail) => {
        this.characterDetail.set(detail);
        this.loadingDetail.set(false);
      },
      error: (err) => {
        this.characterDetail.set(null);
        this.loadingDetail.set(false);
        this.errorDetail.set(err);
      },
    });
  }

  applyFilters({ name, status }: { name: string; status: string }) {
    this.filterName.set(name);
    this.filterStatus.set(status);
    this.pageIndex.set(0);
    this.loadPage();
  }

  onPageChange(pageIndex: number) {
    this.pageIndex.set(pageIndex);
    this.loadPage();
  }

  onSelect(character: any) {
    this.loadCharacterDetail(character);
  }

  onMarkFavorite(character: any) {
    this.store.dispatch(addFavorite({ character }));
  }
}
