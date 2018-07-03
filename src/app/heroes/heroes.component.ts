import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HER } from '../mock-heroes';

@Component({
selector: 'app-heroes',
templateUrl: './heroes.component.html',
styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes = ['Heróis que estão em array do component ts', 'Explosão de fogo','Tempestade de vento', 'Gelo cortante'];

 hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

hers = HER;
selectedHer = HER;

 selectedHer: Her;


onSelect(her: Her): void {
  this.selectedHer = her;
}

constructor() { }

ngOnInit() {
/*console.log(this.her)*/
     }



}
