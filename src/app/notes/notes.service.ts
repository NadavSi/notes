import { Note } from './note.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];
  private notesArray = new Subject<Note[]>();
  constructor(private httpService: HttpService) {}

  
  fetchNotes() {
    this.httpService.postPatch<Note[]>('', '').subscribe((data) => {
      this.notes = data;
      this.notesArray.next([...data]);
    });
  }
  getNotesData() {
    return this.notesArray.asObservable();
  }
  createNote(note: Note) {
    this.notes.push(note);
    this.notesArray.next([...this.notes]);
  }
  updateNote() {}
}
