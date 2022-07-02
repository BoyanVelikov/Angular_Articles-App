import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {

  private symbol: number = 250;
  @Input() article: any;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    this.articleDescLen += this.symbol;
    if(this.articleDescLen >= this.article.description.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.article.description.substr(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    if (this.imageButtonTitle == "Show Image"){
      this.imageButtonTitle = 'Hide Image';
    } else if (this.imageButtonTitle == 'Hide Image') {
      this.imageButtonTitle = 'Show Image';
    }
  }

  hideDesc() { 
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn  = true;
    this.showHideBtn = false;
  }

}