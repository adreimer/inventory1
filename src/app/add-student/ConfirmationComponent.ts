import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirmation',
  template: `
        <div class="modal-header">Next Step</div>
        <div class="modal-body">Do you wish to continue?</div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="clear()">Cancel</button>
        <button type="button" class="btn btn-primary">Yes</button>
        </div>
`
})
export class ConfirmationComponent {
  constructor(public activeModal: NgbActiveModal) { }
  clear() {
    this.activeModal.close();
  }
}
