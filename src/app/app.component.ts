import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    topics=['Angular', 'JQuery', 'React'];
    userModel = new User('Rob','rob@test.com', 3333333, '', 'morning', true); // can be used to edit data
}
