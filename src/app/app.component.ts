import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = 'Angular Academy';
  isShowedMessage = false;

  showMessage() {
  	this.isShowedMessage = true;
  	console.log("Show message");
  }
}
