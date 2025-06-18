import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
})
export class CharacterDetailComponent {
  @Input() detail: any = null;
  @Input() loading: boolean = false;
  @Input() error: any = null;
}
