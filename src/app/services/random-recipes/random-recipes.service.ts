import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

  public listRandomRecipes(num: number){
    const url = `https://api.spoonacular.com/recipes/random?apiKey=987a105cac464595824fcbbc21471d05&number=${num}`
    try {
      return this.http.get(url)
    } catch {
      return null
    }
  }
}
