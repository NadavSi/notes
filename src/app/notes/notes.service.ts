import { Note } from './note.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../services/http.service';
import { map } from 'rxjs/operators'
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private note: Note;
  private notes: Note[] = [];
  private notesArray = new Subject<Note[]>();

  toggleNote = new EventEmitter<string>();
  
  constructor(private httpService: HttpService) {}


  fetchNotes() {
    this.httpService.postPatch<any>('', '')
      .pipe(map((data)=> {
        return data.notes.map(note => {
          return {
            id: note._id,
            ...note
          }
        });
      }))
      .subscribe(notes => {
      console.log(notes);
      this.notes = notes;
      this.notesArray.next([...notes]);
    });
  }
  getNotesData() {
    return this.notesArray.asObservable();
  }
  fetchNote(id) {

  }
  createNote(note: Note) {
    console.log(note);
    this.note = note;
    this.httpService.postPatch<any>('new', note).subscribe((data) => {

    });
    this.notes.push(this.note);
    this.notesArray.next([...this.notes]);
  }
  updateNote() {}
}
