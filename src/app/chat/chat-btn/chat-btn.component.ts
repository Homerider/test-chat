import {Component} from '@angular/core';
import {AvatarUserComponent} from "../../common-ui/avatar-user/avatar-user.component";

@Component({
  selector: 'button[chats]',
  standalone: true,
  imports: [
    AvatarUserComponent
  ],
  templateUrl: './chat-btn.component.html',
  styleUrl: './chat-btn.component.scss'
})
export class ChatBtnComponent {
}
