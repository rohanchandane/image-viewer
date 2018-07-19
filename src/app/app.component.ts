import { Component, OnInit } from '@angular/core';
import { ViewerService } from './viewer/viewer.service';
import { Image } from './viewer/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selected: string;
  title = 'Image Viewer';
  images: Image[];
  searchedImages: Image[];
  searchTitles: string[] = [];

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.getImageData();
  }

  getImageData() {
    this.viewerService.getImages()
      .subscribe((data:  Array<Image>) => {
        this.images  =  data;
        this.getSearchTitles();
        this.search();
      });
  }

  getSearchTitles(): void {
    for (let i = 0; i < this.images.length; i++) {
      this.searchTitles.push(this.images[i].title);
    }
  }

  search(): void {
    this.searchedImages = [];
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].title.includes(this.selected)) {
        this.searchedImages.push(this.images[i]);
      }
    }

    if (!this.searchedImages.length) {
      this.searchedImages = this.images;
    }

  }

}
