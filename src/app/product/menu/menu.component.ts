import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: any  = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
