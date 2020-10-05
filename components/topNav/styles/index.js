import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media';
import { List } from 'react-bootstrap-icons';
import { rotate } from '../../styles/animations';


// Base elements
export const Nav = styled.nav`
  width: 100%;
  padding: 10px 0;
  color: white;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr 2fr 1fr;
  margin: 0 auto;
  font-family: 'zadelis-font';

  @media ${device.mobileXL} { 
    max-width: 90%;
  }

  @media ${device.laptop} { 
    grid-template-columns: repeat(6, 2fr);
  }
`;

export const LinksWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: inherit;
  background: ${props => props.theme.main.colors.skyBlue};
  background: ${props => props.theme.main.gradinets.skyBlueToWhite};
  z-index: 300;
  @media ${device.mobileXL} { 
    top: 0px;
    bottom: unset;
    background: ${props => props.theme.main.colors.skyBlue};
    background: ${props => props.theme.main.gradinets.skyWhiteToBlue};
  }
`;

export const NavItemLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;

    &:hover span {
      color: ${props => props.theme.main.colors.paleGrey};
    }

    &:hover svg {
      fill: ${props => props.theme.main.colors.aqua} !important;
    }

    &.navProfile,
    &.navMessages {
      display: none;
    }

    &.NavMenu {
      align-self: center;
      /* animation: ${rotate} 2s linear infinite; */
    }

  /* hide search icon on big screens */
  @media ${device.laptop} {
    &.navSearch {
        display: none;
      }

    &.navProfile,
    &.navMessages {
      display: flex;
    }

    &.navHome {
      align-self: center;
    }
    
  }

  &:not(:last-of-type) svg {
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.main.colors.black};

    @media ${device.laptop} { 
      width: 26px;
      height: 26px;
    }
  }

  @media ${device.mobileXL} { 
   flex-direction: column-reverse;
  }

`;

export const NavItemSpan = styled.span`
  display: block;
  color: ${props => props.theme.main.colors.black};
  font-size: 0.8em;
  margin-top: 3px;

  @media ${device.mobileXL} { 
   padding-bottom: 5px;
   font-size: 1em;
  }
`;


// Icons
export const ListIcon = styled(List)`
  width: 23px;
  height: 23px;
  fill: ${props => props.theme.main.colors.black};
  align-self: center;
  
  @media ${device.laptop} { 
    width: 26px;
    height: 26px;
    }
`;
