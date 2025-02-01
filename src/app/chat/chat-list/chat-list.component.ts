import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {ChatBtnComponent} from "../chat-btn/chat-btn.component";

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    ChatBtnComponent
  ],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent {

}
