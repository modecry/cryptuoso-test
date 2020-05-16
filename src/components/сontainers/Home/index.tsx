import React, { useContext } from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import Typography from "@material-ui/core/Typography"
// enhacners
import { AppContext } from "enhancers/appContext"
// components
import RobotCards from "./components/RobotCards"
// types
import { RobotsModel } from "contants/types/app"


const HomeContainer: React.FunctionComponent = () => {
	const { robots }: HomeContainerTypes = useContext(AppContext)

	return (
		<>
			<TitleHomeContainer variant="h1" component="h1"> Robots List 🤖</TitleHomeContainer>
			<RobotCards array={robots} />
		</>
	)
}

/* styles*/
const TitleHomeContainer: AnyStyledComponent = styled(Typography)`
	text-align: center;
	padding: 10px 0;
`


/* types*/
type HomeContainerTypes = {
	robots: Array<RobotsModel> | null
}

export default HomeContainer
