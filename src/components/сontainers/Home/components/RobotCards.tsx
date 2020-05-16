import React, { useState,SetStateAction } from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import ButtonMUI from "@material-ui/core/Button"
// components
import RobotCard from "./RobotCard"
// types
import { RobotsModel } from "contants/types/app"
// services
import LocalStorageService from "services/LocalStorageService"

/**
 *  Функция рендеринга карточек на основе массива
 * @param order - порядок элементов  (кратен 10чным значениям)
 * @param array -  массив данных
 */
const renderCards = (count: number,array: Array<RobotsModel>): React.ReactNodeArray =>
	array.map((elemProps,index): React.ReactNode => {
		if (index + 1 <= count) {
			return <RobotCard {...elemProps} key={elemProps.id}/>
		}
	})

/**
 * Функция сохранения порядка подгрузки карточек
 * @param count - исходное число
 * @param setCallback - коллбек стейта
 */
const setCounter = (count: number,setCallback) => (): void => {
	const newCount = count + 10
	LocalStorageService.writeItems([{ key: "order_count",value: newCount }])
	setCallback(newCount)
}

/**
 * Функция получения counter'a  для компонента каротчек
 */
const getCounter = (): number|null => {
	const orderCounter = LocalStorageService.getItem("order_count")
	return orderCounter?.value || orderCounter
}


const RobotCards: React.FunctionComponent = ({ array }: RobotCardsTypes) => {
	const [count, setCount] = useState(getCounter() | 10)
	const cards = renderCards(count, array)

	return (
		<>
			{cards}
			{
				count < array?.length &&
				<Button onClick={setCounter(count,setCount)} variant="contained" color="primary">
					Загрузить еще
				</Button>
			}
		</>
	)
}


/* types*/
type RobotCardsTypes = {
	array: Array<RobotsModel> | null
}
/* styles*/
const Button: AnyStyledComponent = styled(ButtonMUI)`
	display: block !important;
	margin: 20px auto !important;
`

export default RobotCards
