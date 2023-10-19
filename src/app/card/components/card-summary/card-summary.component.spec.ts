import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardSummaryComponent} from './card-summary.component';
import {Component, ViewChild} from "@angular/core";
import {MatCardModule} from "@angular/material/card";

@Component({
  template: `<app-card-summary [title]="titulo" [description]="descricao"></app-card-summary>`
})
class TestCardSummaryComponent {
  @ViewChild(CardSummaryComponent) public component!: CardSummaryComponent;
  titulo = "Título";
  descricao = "Descrição";
}

describe('CardSummaryComponent', () => {
  let hostComponent: TestCardSummaryComponent;
  let component: CardSummaryComponent;
  let fixture: ComponentFixture<TestCardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardSummaryComponent,
        TestCardSummaryComponent
      ],
      imports: [
        MatCardModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCardSummaryComponent);
    fixture.detectChanges();

    hostComponent = fixture.componentInstance;
    component = hostComponent.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud receive title and desc', () => {
    expect(component.title).toBe("Título");
    expect(component.description).toBe("Descrição");
  });

});
