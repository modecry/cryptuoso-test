import React from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import MuiCard from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"


/* Robotcards components*/
const RobotCard: React.FunctionComponent = ({ code, id }: RobotCardTypes) =>
	<Link href={`/robot/${id}`}>
		<Card>
			<Typography variant="h5">{code}</Typography>
		</Card>
	</Link>


/* types*/
type RobotCardTypes = {
	code: string
	id: string
	children: React.ReactNode
}


/* styles*/
const Card: AnyStyledComponent = styled(MuiCard)`
    max-width: 550px;
    padding: 15px 10px;
    margin: 25px auto;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	word-break: break-word;
`
export default RobotCard
