import { LinkToNewTab } from "../Primitives/Link";
import { SubSectionContainer } from "../Primitives/Containers";

const Devcard = () => (
  <SubSectionContainer>
    <h2>I love to read technical blogs 📔</h2>
    <p>
      <LinkToNewTab href='https://app.daily.dev/manishprivet'>
        <img
          src='https://api.daily.dev/devcards/81310412f7324a66ad1f118d45d8847c.png?r=mz4'
          width='300'
          alt="Manish Kumar's Dev Card"
        />
      </LinkToNewTab>
    </p>
  </SubSectionContainer>
);
export default Devcard;
