import React, { useContext } from "react"
import styled, { AnyStyledComponent } from "styled-components"
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
// enhancers
import { AppContext } from "enhancers/appContext"
// components
import ErrorComponent from "components/ErrorComponent"
import Loader from "components/Loader"
// types
import { AppContextTypes, RobotsModel, Statuses } from "contants/types/app"
// graphql
import useFetchRobot, { robotsdData } from "hooks/useFetchRobot"
// styles
import { Button, AbsoluteCentredContainer } from "components/styles/core"
// constnats
import { ERROR_MESSAGES } from "contants/ERROR_MESSAGES"

/**
 * Контейнер страницы информации о роботе
 * @inter RobotContainerProps
 */
const RobotContainer: React.FunctionComponent<RobotContainerProps> = ({ robotId }: RobotContainerProps) => {
	const { state,setAppState }: AppContextTypes = useContext(AppContext) // получаем контекст
	let currentRobots: Array<RobotsModel>| null = state.robots // получаем роботов из стейта
	// Ищем нужного робота по id
	const RobotInfo: RobotsModel| undefined = currentRobots?.find(item => item.id === robotId)

	/* Если отстутвуют роботы в стейте*/
	if (!currentRobots) {
		const { loading, error, data }: robotsdData = useFetchRobot() // фетчим данные с запроса
		/* Обрабатываем условия*/
		if (loading) {
			return <Loader />
		}
		if (error) {
			return <ErrorComponent message={ERROR_MESSAGES.ERROR} buttonPath="/" buttonText="На главную"/>
		}
		currentRobots = data.robots // получаем роботов
		setAppState("robots",currentRobots) // меняем стейт приложения
	}

	/* Если робот найден*/
	if (RobotInfo) {
		const { code, status } = RobotInfo // десткртуризируем данные из конкретного робота
		// объявляем иконку статуса
		return (
			<RobotInfoContainer>
				<Typography variant="h3" component="h3">{code} 🤖</Typography>
				<Typography variant="h4" component="h4">status: <StatusIcon status={Statuses[status]} /></Typography>
				<Link href="/">
					<Button variant="contained" color="primary">Назад</Button>
				</Link>
			</RobotInfoContainer>
		)
	}
	/* в случае если робот по id не найден, отображаем компонент ошибки */
	return <ErrorComponent message={ERROR_MESSAGES.NOT_FOUND_ROBOT} buttonText="Назад" buttonPath="/"/>
}


/* Интерфейс пропсов для контейнара Robot*/
interface RobotContainerProps{
	robotId: string
}

/* Стили компонента робота */
const RobotInfoContainer: AnyStyledComponent = styled(AbsoluteCentredContainer)`
	word-break: break-word;
`

const StatusIcon: AnyStyledComponent = styled.span`
	position: relative;
    top: 1px;
	display: inline-block;
	width: 22px;
	height: 22px;
	background-color: ${p => (p.status ? "#008000" : "#FF0000")};
	border-radius: 25px;

`

export default RobotContainer
