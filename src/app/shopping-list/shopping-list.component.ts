import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: {name: string, amount: number}) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
  }

  onDeleteItem(index: number) {
    this.ingredients.splice(index, 1); // Remove one item at the specified index
  }

  onClearItems() {
    this.ingredients = [];
  }
}