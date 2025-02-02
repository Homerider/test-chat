import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AvatarUserComponent} from "../../common-ui/avatar-user/avatar-user.component";
import {TabsService} from "../../data/services/tabs.service";

@Component({
  selector: 'button[chats]',
  standalone: true,
  imports: [
    AvatarUserComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-btn.component.html',
  styleUrl: './chat-btn.component.scss'
})
export class ChatBtnComponent {
  tab = inject(TabsService).currentTabNumber
}
