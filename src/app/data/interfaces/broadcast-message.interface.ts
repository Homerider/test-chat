export enum BroadcastMessageType {
  TEXT = 'TEXT',
  TYPING = 'TYPING',
}

export interface BroadcastTextMessage {
  id: number;
  type: BroadcastMessageType.TEXT;
  text: string;
  tabNumber: number;
}

export interface BroadcastTypingMessage {
  type: BroadcastMessageType.TYPING;
  isTyping: boolean;
  tabNumber: number;
}

export type BroadcastMessage = BroadcastTextMessage | BroadcastTypingMessage;
