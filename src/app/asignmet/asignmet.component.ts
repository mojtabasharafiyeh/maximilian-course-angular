import { Component } from '@angular/core';

@Component({
  selector: 'app-asignmet',
  templateUrl: './asignmet.component.html',
  styleUrls: ['./asignmet.component.css'],
})
export class AsignmetComponent {
  status = true;
  log = [];
  onclick() {
    this.status = !this.status;
    this.log.push(this.log.length + 1);
  }
}
