import {Route} from "@angular/router";
import {ChatPageComponent} from "./chat-page.component";
import {ChatMessageWrapperComponent} from "../chat-message-wrapper/chat-message-wrapper.component";

export const chatsRoutes: Route[] = [
  {
    path: '',
    component: ChatPageComponent,
    children: [{ path: ':id', component: ChatMessageWrapperComponent }]
  }
]
