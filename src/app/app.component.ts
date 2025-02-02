import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatPageComponent} from "./chat/chat-page/chat-page.component";
import {TabsService} from "./data/services/tabs.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatPageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #tabsService = inject(TabsService)

  constructor() {
    onbeforeunload = () => {
      this.#tabsService.beforeLeave()
    }
  }
}
