import styled from "styled-components";

export const SubSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding-bottom: 20px;

  ul {
    margin-bottom: 30px;
    padding: 0;

    li {
      list-style: none;
      font-size: 1.2em;

      &::before {
        content: "\\2933";
        margin-right: 10px;
      }
    }
  }

  span {
    color: var(--button-color);
    font-weight: 600;
  }

  h2 {
    margin-bottom: 8px;

    a {
      color: var(--button-color);
    }
  }

  p,
  & > section {
    font-size: 1.3rem;
    margin: 0;
    padding-top: 20px;

    a {
      color: var(--button-color);

      &.original {
        color: var(--background-color);
      }
    }

    a.horizontal {
      display: flex;
      padding-top: 30px;

      section {
        margin-left: 15px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;

        caption {
          width: 100%;
        }
      }
    }
  }
`;
