import React from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import MuiCard from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
// next
import Link from "next/link"

/**
 *  Компонент 1 экземпляра карточки с роботом
 *  @interface RobotCardProps
 */
const RobotCard: React.FunctionComponent<RobotCardProps> = ({ code, id }: RobotCardProps) =>
	<Link href={ { pathname: "/robot", query: { id } }} >
		<Card>
			<Typography variant="h5">{code}</Typography>
		</Card>
	</Link>


/* Интерфейс робота */
interface RobotCardProps{
	code: string // кодовое имя робота
	id: string // id
	key: string | number //  уникальный ключ для рекакта
}

/* Стили карточки */
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
