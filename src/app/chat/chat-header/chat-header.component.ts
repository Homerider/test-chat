import { Component } from '@angular/core';
import {AvatarUserComponent} from "../../common-ui/avatar-user/avatar-user.component";

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [
    AvatarUserComponent
  ],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss'
})
export class ChatHeaderComponent {

}
