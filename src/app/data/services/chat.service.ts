import {Injectable, signal} from "@angular/core";
import {ChatMessage} from "../interfaces/chat-message.interface";
import {BroadcastMessage, BroadcastTextMessage} from "../interfaces/broadcast-message.interface";
import {isBroadcastTextMessage, isBroadcastTypingMessage} from "../type-guards/broadcast=message.type-guard";

const CHAT_CHANNEL_NAME = 'bot-help-test-chat'

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  #messageChanel = new BroadcastChannel(CHAT_CHANNEL_NAME);

  messages = signal<ChatMessage[]>([])
  whoTyping = signal<string>('')

  constructor() {
    this.#messageChanel.onmessage = this.handleMessage.bind(this)
  }

  sendMessage(message: BroadcastMessage): void {
    if (isBroadcastTextMessage(message)) {
      this.addNewChatMessage(message, true)
    }
    this.#messageChanel.postMessage(message)
  }

  handleMessage({data}: MessageEvent<BroadcastMessage>) {
    if (isBroadcastTextMessage(data)) {
      this.addNewChatMessage(data)
    }

    if (isBroadcastTypingMessage(data)) {
      this.whoTyping.set(data.isTyping ? `Вкладка №${data.tabNumber} печатает...` : '')
    }
  }

  addNewChatMessage(message: BroadcastTextMessage, isMine = false): void {
    this.messages.update(messages => [
      ...messages,
      {
        id: message.id,
        text: message.text,
        tabNum: message.tabNumber,
        isMine
      }
      ])
  }

  closeChanel() {
    this.#messageChanel.close()
  }
}
