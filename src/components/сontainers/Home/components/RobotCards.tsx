import React, { useState } from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import ButtonMUI from "@material-ui/core/Button"
// components
import RobotCard from "./RobotCard"
// types
import { RobotsModel } from "contants/types/app"


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


const RobotCards: React.FunctionComponent = ({ array }: RobotCardsTypes) => {
	const [count, setCount] = useState(10)

	const cards = renderCards(count, array)

	return (
		<>
			{cards}
			{
				count < array?.length &&
				<Button onClick={() => setCount(count + 10)} variant="contained" color="primary">
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
