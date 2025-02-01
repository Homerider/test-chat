import {Component, EventEmitter, inject, Output, Renderer2} from '@angular/core';
import {AvatarUserComponent} from "../avatar-user/avatar-user.component";
import {FormsModule} from "@angular/forms";
import {SvgIconComponent} from "../svg-icon/svg-icon";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    AvatarUserComponent,
    FormsModule,
    SvgIconComponent
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  postText = ''
  r2 = inject(Renderer2)

  @Output() created = new EventEmitter<string>()

  onTextAreaInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement

    this.r2.setStyle(textarea, 'height', 'auto')
    this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px')
  }

  onCreatePost() {
    if (!this.postText) return

    this.created.emit(this.postText)
    this.postText = ''
  }

  onSend() {
    if (this.postText.trim()) {
      this.created.emit(this.postText)
      this.postText = ''
    }
  }

  onKeyUp() {
    this.onSend()
  }
}
