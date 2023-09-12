import { Component } from '@angular/core';


// App component sayfaları
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*
  styles: [
    `p {color: red;}`
  ]
  */
})
export class AppComponent {
  private title = "Todo App";
  
  todoItem = {
    description: "kahvaltı",
    action: true // yapıldı mı ?
  }

  getTitle () {
    return this.title
  }
}

