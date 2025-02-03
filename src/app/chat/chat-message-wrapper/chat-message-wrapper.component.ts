import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {ChatMessageComponent} from "./chat-message/chat-message.component";
import {MessageInputComponent} from "../../common-ui/message-input/message-input.component";
import {ChatMessageService} from "../../data/services/chat.service";
import {BroadcastMessageType} from "../../data/interfaces/broadcast-message.interface";
import {TabsService} from "../../data/services/tabs.service";

@Component({
  selector: 'app-chat-message-wrapper',
  standalone: true,
  imports: [
    ChatMessageComponent,
    MessageInputComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-message-wrapper.component.html',
  styleUrl: './chat-message-wrapper.component.scss'
})
export class ChatMessageWrapperComponent implements OnDestroy, AfterViewChecked {
  #chatService = inject(ChatMessageService)
  tabNumber = inject(TabsService).currentTabNumber

  messages = this.#chatService.messages
  whoTyping = this.#chatService.whoTyping

  @ViewChild('messagesWrapper') messagesWrapper!: ElementRef;

  ngAfterViewChecked() {
    if (this.messagesWrapper) {
      const element = this.messagesWrapper.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  onMessageCreated(messageText: string) {
    this.#chatService.sendMessage({
      id: Math.random(),
      type: BroadcastMessageType.TEXT,
      text: messageText,
      tabNumber: this.tabNumber()
    })
  }

  onTyping(isTyping: boolean) {
    this.#chatService.sendMessage({
      type: BroadcastMessageType.TYPING,
      isTyping,
      tabNumber: this.tabNumber()
    })
  }

  ngOnDestroy() {
    this.#chatService.closeChanel()
  }
}
