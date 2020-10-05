import styled from 'styled-components';
import { device } from '../../styles/media';

export const LogoStyled = styled.div`
  box-sizing: border-box;
  font-family: 'zadelis-font';
  border-radius: 50%;
  width: 82px;
  height: 82px;
  padding: 13px;
  background: #efefef;
  border: 2px solid ${props => props.theme.main.colors.blue};;
  color: ${props => props.theme.main.colors.blue};
  text-align: center;
  font-size: 48px;
  text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  margin: 0 auto;
`;