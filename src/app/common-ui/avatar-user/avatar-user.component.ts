import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-avatar-user',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar-user.component.html',
  styleUrl: './avatar-user.component.scss'
})
export class AvatarUserComponent {

}
