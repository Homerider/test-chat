import { Component } from '@angular/core';
import {ChatListComponent} from "../chat-list/chat-list.component";
import {RouterOutlet} from "@angular/router";
import {ChatHeaderComponent} from "../chat-header/chat-header.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    ChatListComponent,
    RouterOutlet,
    ChatHeaderComponent
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {

}
