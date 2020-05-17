// services
import LocalStorageService from "./LocalStorageService"
// utils
import debounce from "utils/debounce"

/**
 * Сервис  скродда окна (Тргерится только на ось Y)
 * @private window {any} - объект окна
 */
class WindowScrollService {
	private readonly window: any
	constructor() {
		this.window = global?.window
	}

	/**
	 *  Метод сохранения скролла в localStorage
	 * @param position {number} - позиция скролла по оси Y
	 * @return void
	 */
	saveScrollPosition = (position: number): void => LocalStorageService.writeItems([{ key: "scroll_Y", value: position }])
	/**
	 *  Метод скролла окна к передаваемым коррдинатам по оси Y
	 * @param position {number}  - координаты по которым нужно совершить скролл
	 * @return void
	 */
	scrollTo = (position: number): void => this.window.scroll(0,position)

	/**
	 * Обработчик скролла страницы (сохраняет значение по debounce, каждые 300ms)
	 * @return void
	 */
	scrollHandler = (): void => {
		debounce(() => {
			this.saveScrollPosition(this.window.scrollY)
		}, 300)
	}

	/**
	 * Метод вешает обработчик на событие скролла окна
	 * @param method {function} - передавемый обработчик
	 */
	subscribeToListenScroll = (method: () => void): void => this.window.addEventListener("scroll",method)

	/**
	 * Метод  удаляет обработчик со скролла окна
	 * @param method {function} - передавемый обработчик
	 */
	unsubscribeListenScroll = (method: () => void): void => this.window.removeEventListener("scroll", method)
}

export default new WindowScrollService()
