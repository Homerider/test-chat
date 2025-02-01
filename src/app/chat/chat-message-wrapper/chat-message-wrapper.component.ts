import {AfterViewInit, Component, DestroyRef, ElementRef, HostListener, inject, Renderer2} from '@angular/core';
import {ChatMessageComponent} from "./chat-message/chat-message.component";
import {MessageInputComponent} from "../../common-ui/message-input/message-input.component";
import {debounceTime, fromEvent} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-chat-message-wrapper',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MessageInputComponent
  ],
  templateUrl: './chat-message-wrapper.component.html',
  styleUrl: './chat-message-wrapper.component.scss'
})
export class ChatMessageWrapperComponent implements AfterViewInit {
  hostElement = inject(ElementRef)
  r2 = inject(Renderer2)
  destroyRef = inject(DestroyRef)

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeFeed()
  }

  ngAfterViewInit() {
    this.resizeFeed()

    fromEvent(window, 'resize')
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.resizeFeed()
      })
  }

  resizeFeed() {
    const {top} = this.hostElement.nativeElement.getBoundingClientRect()
    const height = window.innerHeight - top - 28
    this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`)
  }
}
