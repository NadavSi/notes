import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.postPatch<any>('', '')
      .subscribe(data => {
        this.notes = data;
    })
    // console.log(this.notes);
  }

}
