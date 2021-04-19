import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  public notes = [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    console.log(this.notesService.fetchNotes());
    this.notesService.getNotesData().subscribe((notes: []) => {
      this.notes = notes;
    });
    // console.log(this.notes);
  }

}
