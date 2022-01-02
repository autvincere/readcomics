import React from 'react';
import {ContainerFooter, TextFooter} from './styles';
import SVGImg from '../../../assets/svg/me-gusta.svg';

const Index = ({colors}) => {
  // console.log(colors);
  return (
    <ContainerFooter style={{backgroundColor: colors.backgroundColor}}>
      <TextFooter style={{color: colors.textColor}}>
        all rights are not mine
      </TextFooter>
      <SVGImg width={20} height={20} style={{fill: colors.iconColor}} />
    </ContainerFooter>
  );
};

Index.displayName = 'Footer_organism';
export default Index;
