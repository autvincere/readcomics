import styled from 'styled-components/native';
import {heightFooter} from '../../../utils/layout';

export const ContainerFooter = styled.View`
  height: ${heightFooter}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const TextFooter = styled.Text`
  margin-top: 10px;
  margin-bottom: 6px;
  margin-right: 4px;
`;
