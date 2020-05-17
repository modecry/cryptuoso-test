import * as React from "react"
import styled, { keyframes, AnyStyledComponent } from "styled-components"
// material UI
import Typography from "@material-ui/core/Typography"
// styles
import { AbsoluteCentredContainer } from "./styles/core"
/**
 * Компонент анимированной точки
 * @interface DotProps - Интерфейс используемый компонентов
 */
const Dot: React.FunctionComponent<DotProps> = (props: DotProps) => <div className={props.className}>{props.children}</div>


/**
 *  Компонент лоадера
 */
// eslint-disable-next-line react/no-multi-comp
const Loader: React.FunctionComponent = () =>
	<LoaderContainer>
		<LoaderContent>
			<LoaderDot color="#8cc759" delay="0.5s"/>
			<LoaderDot color="#8c6daf" delay="0.4s"/>
			<LoaderDot color="#ef5d74" delay="0.3s"/>
			<LoaderDot color="#f9a74b" delay="0.2s"/>
			<LoaderDot color="#60beeb" delay="0.1s"/>
		</LoaderContent>
		<LoaderText variant="h4" />
	</LoaderContainer>

/* interface */
interface DotProps {
	className?: string
	children?: React.ReactChildren
	color: string // цвет точки
	delay: string // задержка анимации
}

/* Анимаця элементов лоадера*/
const loaderAnimation: AnyStyledComponent = keyframes`
	15% {transform: translateX(0);}
	45% {transform: translateX(230px);}
	65% {transform: translateX(230px);}
	95% {transform: translateX(0);}
`

const loadingText: AnyStyledComponent = keyframes`
    0%  {content: "LOADING";}
    25% {content: "LOADING.";}
    50% {content: "LOADING..";}
    75% {content: "LOADING...";}
`


/* Стили лоадера*/
const LoaderContainer: AnyStyledComponent = styled(AbsoluteCentredContainer)`
    width: 400px;
`

const LoaderContent: AnyStyledComponent = styled.div`
  height: 20px;
  width: 250px;
  margin: auto;
`

const LoaderDot: AnyStyledComponent = styled(Dot)`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  position: absolute;
  border: 2px solid white;
  animation-name: ${loaderAnimation};
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite; 
  animation-delay: ${({ delay }) => delay};
  background-color: ${({ color }) => color};
`

const LoaderText: AnyStyledComponent = styled(Typography)`
	text-align: center;
	padding-top: 20px;
	&:after {
	  content: "LOADING";
	  animation-name: ${loadingText};
	  animation-duration: 3s;
	  animation-iteration-count: infinite;
	}
`

export default Loader
