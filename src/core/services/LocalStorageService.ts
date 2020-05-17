/**
 * Сервис работы с localStoreage
 */
class LocalStorageService {
	private storage: any
	constructor() {
		this.storage = global.localStorage
	}

	writeItems = (items: localStorageItems): void => {
		items.forEach(({ key, value }: localStorageItem) => {
			this.storage[key] = value
		})
	}

	getItems = (items: Array<string>): localStorageItems | Array<null> => items.map(key => ({ [key]: this.storage?.getItem(key) }))

	getItem =(key: string): number | string | null => this.storage?.getItem(key)

}


/* types */
type localStorageItem = {
	key: string
	value: string | number
}
type localStorageItems = Array<localStorageItem>


export default new LocalStorageService()
