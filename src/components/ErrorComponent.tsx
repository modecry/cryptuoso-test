import styled, { AnyStyledComponent } from "styled-components"
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
import ButtonMUI from "@material-ui/core/Button"
import React from "react"


const ErorComponent: React.FunctionComponent<ErrorComponentProps> = ({ message,buttonText,buttonPath }: ErrorComponentProps) =>
	<ErrorInfoContainer>
		<Typography variant="h3">{message}</Typography>
		<Link href={buttonPath}>
			<Button variant="contained" color="primary">{buttonText}</Button>
		</Link>
	</ErrorInfoContainer>


/* error component interface*/
interface ErrorComponentProps {
	message: string
	buttonText: string
	buttonPath: string
}

/* styles*/
const ErrorInfoContainer: AnyStyledComponent = styled.div`
	position: absolute;
	margin: auto;
	left: 0;
    right: 0;
    top:50%;
	transform: translateY(-50%);
	text-align: center;
`

const Button: AnyStyledComponent = styled(ButtonMUI)`
	width: 200px;
	display: block !important;
	margin: 40px auto !important;
`

export default ErorComponent
