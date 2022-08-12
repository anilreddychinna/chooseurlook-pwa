import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prodcuts = [
    { name: 'Item 1', price: '100.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },
    { name: 'Item 2', price: '100.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },
    { name: 'Item 3', price: '200.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },
    { name: 'Item 4', price: '400.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },
    { name: 'Item 5', price: '100.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },
    { name: 'Item 6', price: '900.0', link: 'https://wa.me/7997782982?text=I%20want%20this%20item', type: 'type1' },

];


  constructor() {

    
   }

  

  ngOnInit(): void {

    
  }

}
