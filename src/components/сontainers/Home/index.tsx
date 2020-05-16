import React, { useContext, useEffect } from "react"
import styled, { AnyStyledComponent } from "styled-components"
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
// enhacners
import { AppContext } from "enhancers/appContext"
// components
import RobotCards from "./components/RobotCards"
// types
import { AppState, AppContextTypes } from "contants/types/app"

const HomeContainer: React.FunctionComponent = () => {
	const { state,setAppState }: AppContextTypes = useContext(AppContext)
	
	return (
		<>
			<TitleHomeContainer variant="h1" component="h1"> Robots List 🤖</TitleHomeContainer>
			{/* <RobotCards array={robots} />*/}
			<Link href={{ pathname: "/robot", query: { id: "321" } } } ><a>test</a></Link>
		</>
	)
}

/* styles*/
const TitleHomeContainer: AnyStyledComponent = styled(Typography)`
	text-align: center;
	padding: 10px 0;
`


export default HomeContainer
