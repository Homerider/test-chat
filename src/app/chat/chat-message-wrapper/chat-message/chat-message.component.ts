import { Component } from '@angular/core';
import {AvatarUserComponent} from "../../../common-ui/avatar-user/avatar-user.component";

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    AvatarUserComponent
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {

}
