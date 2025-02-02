import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ChatMessageWrapperComponent} from "../chat-message-wrapper/chat-message-wrapper.component";
import {ChatMessageService} from "../../data/services/chat.service";
import {TabsService} from "../../data/services/tabs.service";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatMessageWrapperComponent,
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
  tab = inject(TabsService).currentTabNumber
}
