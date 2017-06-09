import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-item/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://brightcove.vo.llnwd.net/d21/unsecured/media/1033249144001/1033249144001_2119657672001_900944612-136-1359153922766.jpg?pubId=1033249144001'),
    new Recipe('A Test Recipe', 'This is a test', 'http://brightcove.vo.llnwd.net/d21/unsecured/media/1033249144001/1033249144001_2119657672001_900944612-136-1359153922766.jpg?pubId=1033249144001')
    ];
  constructor() {}
  ngOnInit() {}
}
