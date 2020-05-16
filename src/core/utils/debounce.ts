/**
 * Задержка вызова
 * @param {function} callback передаваемый коллбэк
 * @param {number} delay задержка в мс
 * @category Utils
 */
const debounce = (callback, delay: number): void => {
	let timeout:any
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		callback()
	}, delay)
}

export default debounce
