import {Component, inject, output, Renderer2} from '@angular/core';
import {AvatarUserComponent} from "../avatar-user/avatar-user.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SvgIconComponent} from "../svg-icon/svg-icon";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {switchMap, tap, timer} from "rxjs";

const TYPING_TIMEOUT_MS = 300

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    AvatarUserComponent,
    FormsModule,
    SvgIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  r2 = inject(Renderer2)

  created = output<string>()
  typing = output<boolean>()

  messageTextControl = new FormControl<string>('')

  constructor() {
    this.messageTextControl.valueChanges
      .pipe(
        switchMap(() => {
          this.typing.emit(true)
          return timer(TYPING_TIMEOUT_MS)
            .pipe(
              tap(() => this.typing.emit(false))
            )
        }),
        takeUntilDestroyed()
      )
      .subscribe()
  }

  onTextAreaInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement

    this.r2.setStyle(textarea, 'height', 'auto')
    this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px')
  }

  sendMessage() {
    if (!this.messageTextControl.value) return
    this.created.emit(this.messageTextControl.value)
    this.messageTextControl.reset('', {emitEvent: false})
  }

  onKeyUp() {
    this.sendMessage()
  }
}
