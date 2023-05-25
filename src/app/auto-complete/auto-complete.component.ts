import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  filterOptions: Observable<string[]> | undefined;
  constructor() { }

  ngOnInit(): void {
    
    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value : string ) : string []{
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option => 
      option.toLocaleLowerCase(filterValue));
 
  }
  options: string[] = ['Angular','Java'];
  objectOptions = [
   { name:'Angular'} ,
   { name:'Angular Material'} ,
   { name:'Java'} ,
   { name:'[python]'} 

  ];

  myControl  = new FormControl()

  displayFn(subject : any)
  {
    return subject ? subject.name : undefined
  }


 
}
