/**
 * Сервис работы с localStoreage
 * @private storage - локал сторадж хранилище
 */
class LocalStorageService {
	private storage: any
	constructor() {
		this.storage = global.localStorage
	}

	/**
	 * Метод записи в хранилище
	 * @param items {localStorageItems} - массив элементов для записи
	 * @return void
	 */
	writeItems = (items: localStorageItems): void => {
		items.forEach(({ key, value }: localStorageItem): void => {
			this.storage[key] = value
		})
	}
	/**
	 * Метод получения элементов
	 * @param items {Array<>string>} - массив элементов названия
	 * @return {localStorageItems} -  массив элементов
	 */
	getItems = (items: Array<string>): localStorageItems => items.map((key: string) => ({ [key]: this.storage?.getItem(key) }))

	/**
	 * Метлж получения элемента из хранилища по ключу
	 * @param key{string}
	 * @return {number | string | null}
	 */
	getItem =(key: string): number | string | null => this.storage?.getItem(key)

}


/* types */
type localStorageItem = {
	key: string
	value: string | number
}
type localStorageItems = Array<localStorageItem | null>


export default new LocalStorageService()
