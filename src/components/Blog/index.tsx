import { LinkToNewTab } from "../Primitives/Link";
import { SubSectionContainer } from "../Primitives/Containers";

const Blog = () => (
  <SubSectionContainer>
    <h2>Sometimes I also write blogs 🗒</h2>
    <p>
      on{" "}
      <LinkToNewTab href='https://medium.com/@manishprivet' withIcon>
        Medium
      </LinkToNewTab>{" "}
      or on my Personal Blogging Site{" "}
      <LinkToNewTab href='https://blog.manishk.dev' withIcon>
        Codex
      </LinkToNewTab>
    </p>
  </SubSectionContainer>
);
export default Blog;
