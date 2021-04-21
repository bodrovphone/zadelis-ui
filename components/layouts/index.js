import React from "react";
import Container from "./container";
import Head from "./head";
import {
  Main_ST,
  H1_ST,
  H2_ST,
  Description_ST,
  Centered_ST,
  TwoColumnsDesktop,
  TwoColumns,
  TwoColumnsWrap,
  VCentered_ST,
} from "./styles";

const Layout = (props) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
);

const Main = ({ children }) => <Main_ST>{children}</Main_ST>;

const H1 = (props) => <H1_ST {...props} />;
const H2 = (props) => <H2_ST {...props} />;

const Description = (props) => (
  <Description_ST {...props}>{props.children}</Description_ST>
);

const Centered = ({ children }) => <Centered_ST>{children}</Centered_ST>;

export {
  TwoColumnsDesktop,
  TwoColumns,
  TwoColumnsWrap,
  Centered,
  VCentered_ST,
  Description,
  H1,
  H2,
  Main,
};

export default Layout;
