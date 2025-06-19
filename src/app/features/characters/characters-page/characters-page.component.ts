import { Component, computed, signal, OnInit, inject } from '@angular/core'
import { CharactersTableComponent } from '@/features/characters/characters-table/characters-table.component'

import { CommonModule } from '@angular/common'
import { FiltersBarComponent } from '../../filters-bar/filters-bar.component'
import { FavoriteBarComponent } from '@/features/favorite-bar/favorite-bar.component'
import { CharacterDetailComponent } from '@/features/characters/character-detail/character-detail.component'
import { addFavorite, removeFavorite } from '@/store/favorite/favorite.actions'
import { CharacterService } from '@/core/services/character.service'
import { TotalsBarComponent } from '@/features/totals-bar/totals-bar.component'
import { Store } from '@ngrx/store'
import { CharacterGraphqlService } from '@/core/services/character-graphql.service'
import { Character } from '@/models/character.model'
import { Observable } from 'rxjs'
import { AppState } from '@/store'

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
export class CharactersPageComponent implements OnInit {
  displayedColumns: string[] = [
    'favorite',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'created',
    'actions',
  ]
  dataSource = signal<Character[]>([])
  characterDetail = signal<Character | null>(null)
  loadingDetail = signal(false)
  errorDetail = signal<unknown | null>(null)
  filterName = signal('')
  filterStatus = signal<string[]>([])
  filterGender = signal<string[]>([])
  favorites$: Observable<Character[]>

  pageSize = 20
  pageIndex = signal(0)
  totalResults = signal(0)

  speciesTotals = computed(() => this.getTotals('species'))
  typeTotals = computed(() => this.getTotals('type'))

  characterService = inject(CharacterService)
  characterGraphql = inject(CharacterGraphqlService)
  store = inject<Store<AppState>>(Store)

  constructor() {
    this.favorites$ = this.store.select((state) => state.favorite.characters)
  }

  ngOnInit() {
    this.loadPage()
  }

  applyFilters({ name, status, gender }: { name: string; status: string[]; gender: string[] }) {
    this.filterName.set(name)
    this.filterStatus.set(status)
    this.filterGender.set(gender)
    this.pageIndex.set(0)
    this.loadPage()
  }

  onPageChange(pageIndex: number) {
    this.pageIndex.set(pageIndex)
    this.loadPage()
  }

  onSelectCharacter(character: Character) {
    this.characterDetail.set(null)
    this.loadCharacterDetail(character)
  }

  onMarkFavorite(character: Character, isFavorite: boolean) {
    if (isFavorite) {
      this.store.dispatch(removeFavorite({ characterId: character.id }))
    } else {
      this.store.dispatch(addFavorite({ character }))
    }
  }

  private loadPage() {
    this.characterService
      .getCharacters({
        name: this.filterName(),
        status: this.filterStatus()[0] || '',
        gender: this.filterGender()[0] || '',
        page: String(this.pageIndex() + 1),
      })
      .subscribe({
        next: (res) => {
          this.dataSource.set(res.results)
          this.totalResults.set(res.info.count)
        },
        error: () => {
          this.dataSource.set([])
          this.totalResults.set(0)
        },
      })
  }

  private loadCharacterDetail(character: Character) {
    this.loadingDetail.set(true)
    this.errorDetail.set(null)

    this.characterGraphql.getCharacterDetail(character.id).subscribe({
      next: (detail) => {
        this.characterDetail.set(detail)
        this.loadingDetail.set(false)
      },
      error: (err) => {
        this.characterDetail.set(null)
        this.loadingDetail.set(false)
        this.errorDetail.set(err)
      },
    })
  }
  private getTotals(key: 'species' | 'type') {
    const result: { [key: string]: number } = {}
    for (const char of this.dataSource()) {
      const val = char[key] || 'Desconocido'
      result[val] = (result[val] || 0) + 1
    }
    return result
  }
}
