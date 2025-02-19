import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChapterComponent } from './modal-chapter.component';

describe('ModalChapterComponent', () => {
  let component: ModalChapterComponent;
  let fixture: ComponentFixture<ModalChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
