import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatPageComponent} from "./chat/chat-page/chat-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatPageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
