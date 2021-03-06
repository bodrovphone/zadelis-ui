import styled from "styled-components";
import { device } from "../../styles/media";

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 10px;
  margin: 15px 0;

  @media ${device.mobileXL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default { Cards };
