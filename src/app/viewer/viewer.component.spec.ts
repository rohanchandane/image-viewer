import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerComponent } from './viewer.component';
import { By } from '@angular/platform-browser';

describe('Viewer Component', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerComponent ]
    })
    .compileComponents();
  }));

  xit('should create', () => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeDefined();
  });

  // it('should display image records', async(() => {
  //   fixture = TestBed.createComponent(ViewerComponent);
  //   component = fixture.componentInstance;
  //   const compiled = fixture.debugElement;
  //   component.images = imageList;
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     const cards = compiled.query(By.css('.card'));
  //     console.log('cards: -----------', cards);
  //   });

  // }));

  // should paginate next
  // should paginate prev
  // on change of image paginate
  // should display image info

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
