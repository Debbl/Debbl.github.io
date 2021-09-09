import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #EEE;
  background-color: #49B1F5;

  div {
    margin: 1px;
  }

  a {
    color: #EEE;

    :hover {
      text-decoration: underline;
    }

  }
`

export {
  FooterWrapper
}