import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Image } from './image';

@Component({
  selector: 'app-viewer-modal',
  templateUrl: './modal-content.component.html'
})

export class ModalContentComponent {
  image: Image;

  constructor(public bsModalRef: BsModalRef) { }
}
