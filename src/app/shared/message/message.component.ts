import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

	@Input() title: string;
	@Output() closeMessage = new EventEmitter<any>();
	messageIsOpen = true;

  constructor() { }

  ngOnInit() {
  }

  close() {
  	this.messageIsOpen = false;
  	this.closeMessage.emit(this.messageIsOpen); 
  }

}
