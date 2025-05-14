import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorNodeComponent } from './inspector-node.component';

describe('InspectorNodeComponent', () => {
  let component: InspectorNodeComponent;
  let fixture: ComponentFixture<InspectorNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectorNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectorNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
