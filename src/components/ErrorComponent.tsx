import React from "react"
// next
import Link from "next/link"
// material ui
import Typography from "@material-ui/core/Typography"
// styles
import { Button, AbsoluteCentredContainer } from "components/styles/core"


/**
 * Компонент вывода сообщения об ошибке  при отстутвии данных
 * @interface ErrorComponentProps
 */
const ErorComponent: React.FunctionComponent<ErrorComponentProps> = ({ message,buttonText,buttonPath }: ErrorComponentProps) =>
	<AbsoluteCentredContainer>
		<Typography variant="h3">{message}</Typography>
		<Link href={buttonPath}>
			<Button variant="contained" color="primary">{buttonText}</Button>
		</Link>
	</AbsoluteCentredContainer>


/* Интерфейс пропсов для компонента ошибки*/
interface ErrorComponentProps {
	message: string // сообщение выводимое пользователю
	buttonText: string // текстовка кнопки
	buttonPath: string // путь кнопки
}


export default ErorComponent
