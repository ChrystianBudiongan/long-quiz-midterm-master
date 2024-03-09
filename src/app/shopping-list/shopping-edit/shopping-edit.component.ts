import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  newIngredientName: string = '';
  newIngredientAmount: number = 0;

  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @Output() clearItems = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<Ingredient>(); // Add delete event

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.ingredientAdded.emit({name: this.newIngredientName, amount: this.newIngredientAmount});
    this.newIngredientName = '';
    this.newIngredientAmount = 0;
  }

  onDeleteItem() {
    this.deleteItem.emit(); // Emit delete event
  }

  onClear() {
    this.clearItems.emit();
  }
}