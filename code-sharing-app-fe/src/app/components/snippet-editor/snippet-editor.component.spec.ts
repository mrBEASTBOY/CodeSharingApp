import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetEditorComponent } from './snippet-editor.component';

describe('SnippetEditorComponent', () => {
  let component: SnippetEditorComponent;
  let fixture: ComponentFixture<SnippetEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnippetEditorComponent]
    });
    fixture = TestBed.createComponent(SnippetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
