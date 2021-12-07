import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .one-wrap {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }

  .two-wrap {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }

  .two-wrap::after {
    content: '';
    display: inline-block;
    width: 200px;
    height: 100px;
  }
  .icon-github {
    position: absolute;
    width: 60px;
    right: 30px;
    bottom: 120px;
  }
`;

export {HomeWrapper};
