import { Note } from './../note.model';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faBell, faFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        'max-width': '30%',
        width: '*',
        display: 'block'
      })),
      state('closed', style({
        'max-width': 0,
        width: 0,
        display: 'none'
      })),
      transition('open <=> closed', [
        style({ display: 'block' }),
        animate('0.5s')
      ])
    ]),
    trigger('shareAll', [
      state('all', style({
        display: 'block',
        'max-width': '100%',
        width: '*'
      })),
      state('share', style({
        'max-width': '70%',
      })),
      transition('all <=> share', [
        animate('0.5s')
      ])
    ]),
  ]
})
export class NotesListComponent implements OnInit {
  public notes: Note[] = [];
  private notesSub: Subscription;
  isOpen = false;
  fireIcon = faFire;
  bellIcon = faBell;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.fetchNotes();
    this.notesSub = this.notesService.getNotesData().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
    this.notesService.toggleNote.subscribe(
      (status) => {
        if (status == 'new' || status == 'update') { this.isOpen = true; }
        if (status == 'close') { this.isOpen = false; }
      }
    );
    // console.log(this.notes);
  }

  onUpdate() {
    this.notesService.toggleNote.emit('update');
  }

  ngOnDestroy(): void {
    this.notesSub.unsubscribe();
  }
}
