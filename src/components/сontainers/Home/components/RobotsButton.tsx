import React from "react"
// services
import LocalStorageService from "services/LocalStorageService"
import WindowScrollService from "services/WindowScrollService"
//  constants
import { PAGE_ORDER_CNT } from "../constants" // Констата порядка отображения элементов на странице
// styles
import { Button } from "components/styles/core"
/**
 * Функция сохранения порядка подгрузки карточек
 * @param count - текущий показатель
 * @param stateCalbback - метод стейта родителя
 * @param decrement - флаг декркемента
 */
const setCounter = (count: number, stateCalbback: (value: number) => void,decrement?: boolean) => (): void => {
	let newCount: number
	if (decrement) {
		newCount = count - (count - PAGE_ORDER_CNT)
		WindowScrollService.scrollTo(0)
	} else {
		newCount = count + PAGE_ORDER_CNT
	}
	LocalStorageService.writeItems([{ key: "order_count", value: newCount }])
	stateCalbback(newCount)
}


const RobotsButton: React.FunctionComponent<ButtonProps> = ({ count,stateCallback,decrement }: ButtonProps) =>
	<Button onClick={setCounter(count,stateCallback,decrement)} variant="contained" color="primary">
		{decrement ? "Скрыть" : "Показать еще"}
	</Button>


/* Интрерфейс пропсов кнопки*/
interface ButtonProps {
	count: number
	stateCallback: (value: number) => void
	decrement?: boolean
}


export default RobotsButton
