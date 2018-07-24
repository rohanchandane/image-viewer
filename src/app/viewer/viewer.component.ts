import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from './image';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalContentComponent } from './modal-content.component';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnChanges {
  @Input() images: Image[];
  paginatedImages: Image[];

  paginationFirstCount: number;
  paginationLastCount: number;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal(image: Image) {
    const initialState = {
      image: image
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
        this.paginationFirstCount = 0;
        this.paginationLastCount = 4;
        this.loadPaginatedImages(this.paginationFirstCount, this.paginationLastCount);
    }
  }

  loadPaginatedImages(first, last) {
    if (this.images) {
      this.paginatedImages = this.images.slice(first, last);
    }
  }

  nextRecords() {
    if (this.paginationLastCount < this.images.length) {
      this.paginationFirstCount = this.paginationFirstCount + 4;
      this.paginationLastCount = this.paginationLastCount + 4;
      this.loadPaginatedImages(this.paginationFirstCount, this.paginationLastCount);
    }
  }

  previousRecords() {
    if (this.paginationLastCount - 4 > 0) {
      this.paginationFirstCount = this.paginationFirstCount - 4;
      this.paginationLastCount = this.paginationLastCount - 4;
      this.loadPaginatedImages(this.paginationFirstCount, this.paginationLastCount);
    }
  }
}
