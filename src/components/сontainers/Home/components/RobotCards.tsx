import React, { useState } from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import ButtonMUI from "@material-ui/core/Button"
// components
import RobotCard from "./RobotCard"
import RobotButton from "./RobotsButton"
// types
import { RobotsModel } from "contants/types/app"
// services
import LocalStorageService from "services/LocalStorageService";

/**
 *  Функция рендеринга карточек на основе массива
 * @param count - порядок элементов  (кратен 10чным значениям)
 * @param array -  массив данных
 */
const renderCards = (count: number,array: Array<RobotsModel>): React.ReactNodeArray =>
	array.map((elemProps,index): React.ReactNode => {
		if (index++  <= count) {
			return <RobotCard {...elemProps} key={elemProps.id}/>
		}
	})


/**
 * Функция получения counter'a  для компонента каротчек
 */
const getCounter = (): number | null => LocalStorageService.getItem("order_count")


const RobotCards: React.FunctionComponent = ({ array }: RobotCardsTypes) => {
	const [count, setCount] = useState(getCounter() | 10)
	const cards = renderCards(count, array)

	return (
		<>
			{cards}
			<RobotButton count={count} stateCallback={setCount} decrement={count >= array.length}/>
		</>
	)
}


/* types*/
type RobotCardsTypes = {
	array: Array<RobotsModel> | null
}

export default RobotCards
