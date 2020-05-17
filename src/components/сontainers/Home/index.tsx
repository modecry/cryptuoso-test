import React, { useContext, useEffect } from "react"
// enhacners
import { AppContext } from "enhancers/appContext"
// components
import RobotCards from "./components/RobotCards"
import HomeLayout from "./HomeLayout"
import Loader from "components/Loader"
import ErrorComponent from "components/ErrorComponent"
// types
import { AppContextTypes, RobotsModel } from "contants/types/app"
// graphql
import { useQuery } from "@apollo/react-hooks"
import GET_ROBOTS from "graphQL/GET_ROBOTS"

const HomeContainer: React.FunctionComponent = () => {
	const { state, setAppState }: AppContextTypes = useContext(AppContext)
	let robots: Array<RobotsModel> = state.robots

	if (!robots) {
		const { loading, error, data } = useQuery(GET_ROBOTS)
		if (loading) {
			return <HomeLayout><Loader /></HomeLayout>
		}
		if (error) {
			return <HomeLayout><ErrorComponent  message="Ошибка загрузки данных (" buttonText="Повторить" buttonPath="/"/></HomeLayout>
		}
		robots = data.robots
		setAppState("robots",robots)
	}
	return (
		<HomeLayout>
			<RobotCards array={robots}/>
		</HomeLayout>
	)
}

export default HomeContainer
