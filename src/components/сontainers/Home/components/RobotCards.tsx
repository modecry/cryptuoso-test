import React, { useState } from "react"
// components
import RobotCard from "./RobotCard"
import RobotButton from "./RobotsButton"
// types
import { RobotsModel } from "contants/types/app"
// services
import LocalStorageService from "services/LocalStorageService"
//  constants
import { PAGE_ORDER_CNT } from "../constants" // Констата порядка отображения элементов на странице

/**
 *  Функция рендеринга карточек на основе массива и количества которое должно отображатся на странице
 * @param count{number} - кол-во элементов на странице
 * @param array{Array<RobotsModel>} - Массив модели Roots
 * @return React.nodes
 */
const renderCards = (count: number,array: Array<RobotsModel>): React.ReactNodeArray => {
	const newItems: Array<RobotsModel> = [...array].filter((item,index): boolean => index < count)
	return newItems.map((elemProps): React.ReactNode => <RobotCard {...elemProps} key={elemProps.id}/>)
}


/**
 *  Функция получения значения текушека счетчика,
 *  для отображения кол-ва элементов
 *  @return {number | null}
 */
const getCounter = (): number | null => LocalStorageService.getItem("order_count")

/**
 * Компонент отображения карточек на основе массива
 * @interface RobotCardsProps
 */
const RobotCards: React.FunctionComponent<RobotCardsProps> = ({ array }: RobotCardsProps) => {
	const [count, setCount] = useState(getCounter() | PAGE_ORDER_CNT)
	const cards = renderCards(count, array)

	return (
		<>
			{cards}
			<RobotButton count={count} stateCallback={setCount} decrement={count >= array.length}/>
		</>
	)
}


/* Интерфейс пропсов  компонента карточек*/
interface RobotCardsProps {
	array: Array<RobotsModel> | null // Массив модели Robots | null
}

export default RobotCards
