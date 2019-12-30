import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costum-search',
  templateUrl: './costum-search.page.html',
  styleUrls: ['./costum-search.page.scss'],
})
export class CostumSearchPage implements OnInit {

  constructor() { }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

logRatingChange2(rating){
  console.log("changed rating2: ",rating);
  // do your stuff
}

  ngOnInit() {
  }

}
