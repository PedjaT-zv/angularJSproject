import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputReference: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputReference: ElementRef;

  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngridient = new Ingredient(ingName, ingAmount);
    this.ingridientAdded.emit(newIngridient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
