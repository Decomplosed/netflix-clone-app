import styled from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 999;
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -22px;
`;