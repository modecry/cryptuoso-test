import * as React from "react";
import styled, { keyframes } from "styled-components"
// material UI
import Typography from "@material-ui/core/Typography"


const Dot: React.FunctionComponent<DotProps> = props => <div className={props.className}>{props.children}</div>


const Loader = () =>
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
	color: string
	delay: string
}

/* loader animation*/
const loaderAnimation = keyframes`
	15% {transform: translateX(0);}
	45% {transform: translateX(230px);}
	65% {transform: translateX(230px);}
	95% {transform: translateX(0);}
`

const loadingText = keyframes`
    0%  {content: "LOADING";}
    25% {content: "LOADING.";}
    50% {content: "LOADING..";}
    75% {content: "LOADING...";}
`


/* Loader styles*/
const LoaderContainer = styled.div`
    width: 400px;
    margin: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left:0;
    right:0;
    margin: auto;
`

const LoaderContent = styled.div`
  height: 20px;
  width: 250px;
  margin: auto;
`

const LoaderDot = styled(Dot)`
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

const LoaderText = styled(Typography)`
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
