import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { ScreenWidth } from '../shared';

// images
import card_bg from "./../../assets/bgs/background_transparent.png";

import { CardProps } from './Types';

const CardBackground = styled .ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67 }px;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px ;
    margin-right: 25px;
    overflow: hidden;
`;
const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: left;
    align-items: center;
    padding: 30px;
    flex: 1;
`;
const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    width: 100%;
`;
const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => {};
  return (
    <CardBackground source={card_bg}>
        <CardTouchable underlayColor={colors.primary} onPress={handlePress}>
        <TouchableView>
            <CardRow></CardRow>
            <CardRow></CardRow>
        </TouchableView>
        </CardTouchable>
    </CardBackground>
  )
}

export default CardItem