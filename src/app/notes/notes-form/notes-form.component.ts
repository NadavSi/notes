import { Note } from './../note.model';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {
  note: Note = new Note();
  creationDate = new Date();
  showNote = true;
  status = 'new';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.singleNote.subscribe(
      (note) => {
        console.log(note);
        this.status = note == null ? 'new' : 'update';
        if (this.status == 'new') {
          this.note = new Note();
        } else {
            this.note = note;
        }
      }
    );
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

  onSave(note) {
    if (this.status == 'new') {
      this.notesService.createNote(this.note);
    } else {
      this.notesService.updateNote();
    }
    note.reset()
  }

  onClose() {
    this.notesService.singleNote.emit(null);
  }
}
