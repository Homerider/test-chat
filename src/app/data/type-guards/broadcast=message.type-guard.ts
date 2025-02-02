import {
  BroadcastMessage,
  BroadcastMessageType,
  BroadcastTextMessage,
  BroadcastTypingMessage
} from "../interfaces/broadcast-message.interface";

export function isBroadcastTextMessage(message: BroadcastMessage): message is BroadcastTextMessage {
  return message.type === BroadcastMessageType.TEXT;
}

export function isBroadcastTypingMessage(message: BroadcastMessage): message is BroadcastTypingMessage {
  return message.type === BroadcastMessageType.TYPING;
}
