import React from "react"
import styled, { keyframes, AnyStyledComponent, CSSKeyframes } from "styled-components"

const BounceKeyframes: CSSKeyframes = keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`

export const InfinitBounce: AnyStyledComponent = styled.span`
  display: inline-block;
  animation-name: ${BounceKeyframes};
  animation-timing-function: linear;
  animation-duration:2.5s;
  animation-iteration-count: infinite; 
`
