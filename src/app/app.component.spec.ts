import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '../../node_modules/@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Image } from './viewer/image';
import { ViewerService } from './viewer/viewer.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  const viewerServiceStub = jasmine.createSpyObj( 'ViewerService', ['getImages']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ViewerComponent
      ],
      imports: [
        FormsModule,
        TypeaheadModule.forRoot()
      ],
      providers: [
        { provide: ViewerService, useValue: viewerServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Image Viewer'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Image Viewer');
  }));

  it('should render title in a navbar', async(() => {
    viewerServiceStub.getImages.and.returnValue( of(true));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Welcome to Image Viewer!');
  }));

  it('should call service to get Images', () => {
    viewerServiceStub.getImages.and.returnValue( of(imageList));
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ViewerService);

    app.ngOnInit();

    expect(service.getImages).toHaveBeenCalled();
    // should update images with data
    expect(app.images).toEqual(imageList);
    // should update searchTitles
    expect(app.searchTitles).toEqual(['image 1', 'image 2']);
    // should udpate searchedImages
    expect(app.searchedImages).toEqual(imageList);
  });

  it('should search images', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.images = imageList;
    app.selected = 'image 1';
    app.search();

    expect(app.searchedImages).toEqual([imageList[0]]);
  });
});

@Component({
  selector: 'app-viewer',
  template: '<div></div>'
})
export class ViewerComponent {
  @Input() images: Image[];
}

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
