import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidVolumeComponent } from './vid-volume.component';

describe('VidVolumeComponent', () => {
  let component: VidVolumeComponent;
  let fixture: ComponentFixture<VidVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
