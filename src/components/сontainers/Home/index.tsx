import React, { useContext } from "react"
// enhancers
import { AppContext } from "enhancers/appContext"
// components
import RobotCards from "./components/RobotCards"
import HomeLayout from "./HomeLayout"
import Loader from "components/Loader"
import ErrorComponent from "components/ErrorComponent"
// types
import { AppContextTypes, RobotsModel } from "contants/types/app"
// graphql
import useFetchRobot, { robotsdData } from "hooks/useFetchRobot"
// constnats
import { ERROR_MESSAGES } from "contants/ERROR_MESSAGES"

/**
 *  Контейнер домашней страницы
 */
const HomeContainer: React.FunctionComponent = () => {
	const { state, setAppState }: AppContextTypes = useContext(AppContext) // коннект к контексту приложения
	let currentRobots: Array<RobotsModel> | null = state.robots // массив роботов или null

	/* При отстувии роботв в стейте*/
	if (!currentRobots) {
		const { loading, error, data }: robotsdData = useFetchRobot() // фетчим данные из запроса
		/* Выводим нужный компоненты*/
		if (loading) {
			return <HomeLayout><Loader /></HomeLayout>
		}
		if (error) {
			return <HomeLayout><ErrorComponent message={ERROR_MESSAGES.ERROR} buttonText="Повторить" buttonPath="/"/></HomeLayout>
		}
		currentRobots = data.robots // переопределяем  значение переменной
		setAppState("robots",currentRobots) // апдейтим стейт приложения
	}
	return (
		<HomeLayout>
			<RobotCards array={currentRobots}/>
		</HomeLayout>
	)
}

export default HomeContainer
