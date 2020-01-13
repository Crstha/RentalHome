import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  items = [];

  constructor() {
    this.addmoreitems();
   }

   addmoreitems(){
     for(let i=0; i<10; i++){
       this.items.push(i);
     }
   }
  ngOnInit() {
  }

}
