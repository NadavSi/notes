import { Note } from './../note.model';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  public notes: Note[] = [];
  private notesSub: Subscription;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.fetchNotes();
    this.notesSub = this.notesService.getNotesData().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
    // console.log(this.notes);
  }

  ngOnDestroy(): void {
    this.notesSub.unsubscribe();
  }
}
