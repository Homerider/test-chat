import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageBoxComponent} from "./message-box/message-box/message-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-chat';
}
