import styled from "styled-components";
import { swipeRight } from "../../styles/animations";
import { device } from "../../styles/media";

const swipeS = swipeRight("-52%", "-52%");
const swipeM = swipeRight("-17%", "-17%");

export const Categories_ST = styled.div`
  width: 100%;
  margin-bottom: 20px;
  overflow: scroll;
  font-family: "zadelis-font";
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Mask_ST = styled.div`
  overflow: scroll;
  display: flex;
  width: 205%;
  justify-content: space-between;
  animation: ${swipeS} 5s linear 2s 1;

  @media ${device.mobileXL} {
    width: 120%;
    animation: ${swipeM} 3s linear 2s 1;
  }

  @media ${device.tablet} {
    animation: none;
    width: 100%;
    justify-content: space-around;
  }
`;

export const Image_ST = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-color: ${(props) => props.theme.colors.medium};
  }

  &:nth-child(3n) img {
    background-color: ${(props) => props.theme.colors.mediumWell};
  }
  &:nth-child(3n + 1) img {
    background-color: ${(props) => props.theme.colors.rareMedium};
  }
`;