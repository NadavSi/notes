import { NotesService } from './../../notes/notes.service';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Note } from 'src/app/notes/note.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  createNote() {
    this.notesService.singleNote.emit(new Note);
  }
}
