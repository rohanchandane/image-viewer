import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewerService } from './../viewer/viewer.service';
import { Image } from './image';

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

  constructor(private viewerService: ViewerService) {}

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
    if (this.paginationLastCount + 4 <= this.images.length) {
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
