import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits = [
    { name: '12', emoji: '🍇' },
    { name: '11', emoji: '🍈' },
    { name: '10', emoji: '🍉' },
    { name: '9', emoji: '🍊' },
    { name: '8', emoji: '🍋' },
    { name: '7', emoji: '🍌' },
    { name: '6', emoji: '🍍' },
    { name: '5', emoji: '🍎' },
    { name: '4', emoji: '🍏' },
    { name: '3', emoji: '🍐' },
    { name: '2', emoji: '🍑' },
    { name: '1', emoji: '🍒' },
  ]

}
