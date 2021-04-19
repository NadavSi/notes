import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes:object[] = [];
  private notesArray = new Subject<object[]>();
  constructor(private httpService: HttpService) { }

  fetchNotes() {
       this.httpService.postPatch<[]>('', '')
         .subscribe(data => {
           this.notes = data;
        this.notesArray.next([...data]);
    })
  }
  getNotesData() {
    return this.notesArray.asObservable();
  }
  createNote() {
    const note = {message: "vcbb", date: new Date(), creator: "me"};
    this.notes.push(note);
    this.notesArray.next([...this.notes]);
  }
  updateNote() {

  }
}
