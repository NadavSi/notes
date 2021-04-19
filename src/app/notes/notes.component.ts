import { NotesService } from './notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: '',
  providers: [NotesService]
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
