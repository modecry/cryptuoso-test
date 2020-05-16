import React, { useContext, useEffect } from "react"
import styled, { AnyStyledComponent } from "styled-components"
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
// enhacners
import { AppContext } from "enhancers/appContext"
// components
import RobotCards from "./components/RobotCards"
import HomeLayout from "./HomeLayout"
// types
import { AppContextTypes } from "contants/types/app"
// graphql
import { useQuery } from "@apollo/react-hooks"
import GET_ROBOTS from "graphQL/GET_ROBOTS"

const HomeContainer: React.FunctionComponent = () => {
	const { state, setAppState }: AppContextTypes = useContext(AppContext)
	let { robots } = state

	if (!state.robots) {
		const { loading, error, data } = useQuery(GET_ROBOTS)
		if (loading) {
			return <HomeLayout>Loading...</HomeLayout>
		}
		if (error) {
			return <HomeLayout>error</HomeLayout>
		}
		robots = data.robots
		setAppState("robots",data.robots)
	}
	return (
		<HomeLayout>
			<RobotCards array={robots}/>
		</HomeLayout>
	)
}

export default HomeContainer
