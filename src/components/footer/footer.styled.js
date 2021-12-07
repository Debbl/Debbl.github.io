import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #eee;
  background-color: #49b1f5;

  .copyright,
  .framework-info,
  .footer_custom_text {
    margin: 1px;

    a {
      color: #eee;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export {FooterWrapper};
