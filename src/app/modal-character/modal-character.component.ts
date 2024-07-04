import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-character',
  templateUrl: './modal-character.component.html',
  styleUrls: ['./modal-character.component.scss']
})
export class ModalCharacterComponent {
  @Input() character: any;
  currentFormIndex: number = 0;

  nextForm() {
    if (this.character.forms && this.character.forms.length > 0) {
      this.currentFormIndex = (this.currentFormIndex + 1) % this.character.forms.length;
    }
  }

  prevForm() {
    if (this.character.forms && this.character.forms.length > 0) {
      this.currentFormIndex = (this.currentFormIndex - 1 + this.character.forms.length) % this.character.forms.length;
    }
  }

  get currentForm() {
    return this.character.forms[this.currentFormIndex];
  }
}
