import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  filterBy = { term: '' };
  @Output() filtered = new EventEmitter();
  constructor() {}
  setFilter():void{
   this.filtered.emit(this.filterBy)
  }
  ngOnInit(): void {}
}
