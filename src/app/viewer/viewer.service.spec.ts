import { TestBed, getTestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ViewerService, IMAGE_API } from './viewer.service';

describe('Viewer Service', () => {
  let injector;
  let service: ViewerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViewerService]
    });

    injector = getTestBed();
    service = injector.get(ViewerService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getImages', () => {
    it('should return an Observable<any>', () => {
      const dummyImages = imageList;

      service.getImages().subscribe(images => {
        expect(images.length).toBe(2);
        expect(images).toEqual(dummyImages);
      });

      const req = httpMock.expectOne(IMAGE_API);
      expect(req.request.method).toBe('GET');
      req.flush(dummyImages);
    });
  });
});

const imageList = [
  {
    albumId: 1,
    id: 1,
    title: 'image 1',
    url: 'http://placehold.it/600/92c952',
    thumbnailUrl: 'http://placehold.it/150/92c952'
  },
  {
    albumId: 1,
    id: 2,
    title: 'image 2',
    url: 'http://placehold.it/600/771796',
    thumbnailUrl: 'http://placehold.it/150/771796'
  }
];
