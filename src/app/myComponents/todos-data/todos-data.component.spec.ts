import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDataComponent } from './todos-data.component';

describe('TodosDataComponent', () => {
  let component: TodosDataComponent;
  let fixture: ComponentFixture<TodosDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
