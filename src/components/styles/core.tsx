import ButtonMUI from "@material-ui/core/Button"
import styled, { AnyStyledComponent } from "styled-components"

/* Стили кнопки для страниц*/
export const Button: AnyStyledComponent = styled(ButtonMUI)`
	width: 200px;
	display: block !important;
	margin: 20px  auto !important;
`

/* Абсолютный центрированный контейнер*/
export const AbsoluteCentredContainer: AnyStyledComponent = styled.div`
	position: absolute;
	margin: auto;
	left: 0;
    right: 0;
    top:50%;
	transform: translateY(-50%);
	text-align: center;
`
