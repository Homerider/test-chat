import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {AvatarUserComponent} from "../../../common-ui/avatar-user/avatar-user.component";
import {ChatMessage} from "../../../data/interfaces/chat-message.interface";

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    AvatarUserComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
  message = input<ChatMessage>()
}
