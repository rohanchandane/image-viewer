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
  it('should render title in a h1 tag', async(() => {
    viewerServiceStub.getImages.and.returnValue( of(true));
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Welcome to Image Viewer!');
  }));
});

@Component({
  selector: 'app-viewer',
  template: '<div></div>'
})
export class ViewerComponent {
  @Input() images: Image[];
}
