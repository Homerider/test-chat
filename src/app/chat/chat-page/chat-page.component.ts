import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ChatMessageWrapperComponent} from "../chat-message-wrapper/chat-message-wrapper.component";
import {AvatarUserComponent} from "../../common-ui/avatar-user/avatar-user.component";
import {ChatBtnComponent} from "../chat-btn/chat-btn.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatMessageWrapperComponent,
    AvatarUserComponent,
    ChatBtnComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
}
