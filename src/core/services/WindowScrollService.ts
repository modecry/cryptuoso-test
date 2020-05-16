// services
import LocalStorageService from "./LocalStorageService"
// utils
import debounce from "utils/debounce"

class WindowScrollService {
	private readonly window: any
	constructor() {
		this.window = global?.window
	}

	saveScrollPosition = (position: number): void => LocalStorageService.writeItems([{ key: "scroll_Y", value: position }])

	scrollTo = (position: number): void => this.window.scroll(0,position)

	/* обработчик скролла*/
	scrollHandler = (): void => {
		debounce(() => {
			this.saveScrollPosition(this.window.scrollY)
		}, 500)
	}
	/* Подиски/отписки на события скролла*/
	subscribeToListenScroll = (method: any): void => this.window.addEventListener("scroll",method)
	unsubscribeListenScroll = (method: any): void => this.window.removeEventListener("scroll", method)
}

export default new WindowScrollService()
