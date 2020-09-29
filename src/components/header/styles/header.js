import styled from 'styled-components/macro';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;
`;
