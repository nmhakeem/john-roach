
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-character',
  templateUrl: './modal-character.component.html',
  styleUrls: ['./modal-character.component.scss']
})
export class ModalCharacterComponent {

  @Input() character: any;   // Receiving the selected character
  currentForm: any;          // Form to show in the modal

  @Output() closeModal = new EventEmitter<void>();  // Event to close the modal

  ngOnInit(): void {
    // Set the default form to display when the modal opens
    if (this.character && this.character.forms) {
      this.currentForm = this.character.forms[0];
    }
  }

  nextForm() {
    // Logic to switch to the next form
  }

  prevForm() {
    // Logic to switch to the previous form
  }

  // Close the modal
  close() {
    this.closeModal.emit();
  }
}
