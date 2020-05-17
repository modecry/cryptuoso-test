import React from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import ButtonMUI from "@material-ui/core/Button"
// services
import LocalStorageService from "services/LocalStorageService"
import WindowScrollService from "services/WindowScrollService"

/**
 * Функция сохранения порядка подгрузки карточек
 * @param count - текущий показатель
 * @param stateCalbback - метод стейта родителя
 * @param decrement - флаг декркемента
 */
const setCounter = (count: number, stateCalbback,decrement?: boolean) => (): void => {
	let newCount: number
	if (decrement) {
		newCount = count - (count - 10)
		WindowScrollService.scrollTo(0)
	} else {
		newCount = count + 10
	}
	LocalStorageService.writeItems([{ key: "order_count", value: newCount }])
	stateCalbback(newCount)
}


const RobotsButton: React.FunctionComponent = ({ count,stateCallback,decrement }: ButtonTypes) =>
	<Button onClick={setCounter(count,stateCallback,decrement)} variant="contained" color="primary">
		{decrement ? "Скрыть" : "Показать еще"}
	</Button>


/* Button type*/
type ButtonTypes = {
	count: number
	stateCalbback: void
	decrement?: boolean
}


/* styles*/
const Button: AnyStyledComponent = styled(ButtonMUI)`
	display: block !important;
	margin: 20px auto !important;
`

export default RobotsButton
