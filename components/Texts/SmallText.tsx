import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'


import {colors} from "../colors";


import { TextProps } from "./Types"

const StyledText = styled.Text`
    font-size: 15px;
    color:${colors.white}
    text-align: left;
    font-family: Lato-Regular;
`

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText styles={props.textStyles}>{props.children}</StyledText>
  )
}

export default SmallText