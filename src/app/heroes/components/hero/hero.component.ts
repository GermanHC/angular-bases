import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizyName(): string {
    return this.name.toUpperCase();
  }

  getHerodDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHeroName(): void {
    this.name = 'spiderman';
  }

  changeHeroAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
