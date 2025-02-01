import { Routes } from '@angular/router';
import {chatsRoutes} from "./chat/chat-page/chastRoutes";

export const routes: Routes = [{
  path: 'chats',
  loadChildren: () => chatsRoutes
}];
