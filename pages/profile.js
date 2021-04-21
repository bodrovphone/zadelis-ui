import Layout, { Main, H1, H2, TwoColumnsWrap } from "../components/layouts";
import { ProfileEditable, ProfileContext } from "../components/profile";

import Footer from "../components/footer";

export default function Home(props) {
  return (
    <Layout>
      <Main>
        <H1>
          <div>Zadelis</div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>
        <TwoColumnsWrap>
          <ProfileEditable name="Василий" />
          <ProfileContext />
        </TwoColumnsWrap>
      </Main>
      <Footer />
    </Layout>
  );
}