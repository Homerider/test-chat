import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  currentTabNumber = signal<number>(0)

  constructor() {
    this.init()
  }

  init() {
    const latestUnloadedTab = localStorage.getItem('latestUnloadedTab')

    if (latestUnloadedTab) {
      this.currentTabNumber.set(+latestUnloadedTab)
      localStorage.removeItem('latestUnloadedTab')
      return
    }

    const latestTabNumber = localStorage.getItem('latestTab');
    const currentTab = latestTabNumber ? +latestTabNumber + 1 : 1
    this.currentTabNumber.set(currentTab)

    localStorage.setItem('latestTab', `${currentTab}`)
  }

  beforeLeave() {
    localStorage.setItem('latestUnloadedTab', `${this.currentTabNumber()}`)
  }
}
