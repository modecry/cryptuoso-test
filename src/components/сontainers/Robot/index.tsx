import React, { useContext } from "react"
import styled, { AnyStyledComponent } from "styled-components"
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
import ButtonMUI from "@material-ui/core/Button"
// enhacners
import { AppContext } from "enhancers/appContext"
// types
import { RobotsModel,Statuses, AppContextTypes } from "constants/types/app"


const RobotContainer: React.FunctionComponent = ({ id }: RobotContainerTypes) => {
	const { state:{robots} }: AppContextTypes = useContext(AppContext)
	const RobotInfo: RobotsModel| undefined = robots?.find(item => item.id === id)

	if (RobotInfo) {
		const { code,status }: RobotsModel = RobotInfo
		const statusIcon = Statuses[status] ? <StatusIcon>🟢</StatusIcon> : <StatusIcon>🔴</StatusIcon>
		return (
			<RobotInfoContainer>
				<Typography variant="h3">{code} 🤖</Typography>
				<Typography variant="h4">status: {statusIcon}</Typography>
				<Link href="/">
					<Button variant="contained" color="primary">Назад</Button>
				</Link>
			</RobotInfoContainer>
		)
	}
	return (
		<RobotInfoContainer>
			<Typography variant="h3">Робот не найден 😢</Typography>
			<Link href="/">
				<Button variant="contained" color="primary">Назад</Button>
			</Link>
		</RobotInfoContainer>
	)
}


/* Robot Container types*/
type RobotContainerTypes ={
	id: string
}

/* styles*/
const RobotInfoContainer: AnyStyledComponent = styled.div`
	width: 80%;
	position: absolute;
	margin: auto;
	  left: 0;
    right: 0;
    top:50%;
	transform: translateY(-50%);
	text-align: center;
	word-break: break-word;
`

const StatusIcon: AnyStyledComponent = styled.span`
	font-size: 25px;
`
const Button: AnyStyledComponent = styled(ButtonMUI)`
	width: 200px;
	display: block !important;
	margin: 40px auto !important;
`

export default RobotContainer
