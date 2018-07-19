// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';

// import { ViewerComponent } from './viewer.component';
// import { ViewerService } from './viewer.service';

// describe('Viewer Component', () => {
//   let component: ViewerComponent;
//   let fixture: ComponentFixture<ViewerComponent>;
//   let viewerService: ViewerService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ViewerComponent ],
//       providers: [
//         { provide: ViewerService, useClass: MockViewerService }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     viewerService = TestBed.get(ViewerService);
//   });

//   it('should create', () => {
//     expect(component).toBeDefined();
//   });

//   it('should get images list', () => {
//     spyOn(viewerService, 'getImages').and.callThrough();
//     component.ngOnInit();
//     expect(viewerService.getImages).toHaveBeenCalled();
//     expect(component.images).toEqual(imageList);
//   });

//   it('should display image thumbails in row', () => {

//   });
// });

// class MockViewerService {
//   getImages() {
//     const images = imageList;
//     return of( images );
//   }
// }

// const imageList = [
//   {
//     albumId: 1,
//     id: 1,
//     title: 'image 1',
//     url: 'http://placehold.it/600/92c952',
//     thumbnailUrl: 'http://placehold.it/150/92c952'
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: 'image 2',
//     url: 'http://placehold.it/600/771796',
//     thumbnailUrl: 'http://placehold.it/150/771796'
//   }
// ];
