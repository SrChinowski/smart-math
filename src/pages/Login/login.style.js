import styled from 'styled-components';

import bannerImg from '../../assets/images/login.png';

const LoginWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

export const LoginLayout = styled.div`
  overflow: hidden;
  display: list-item;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`
export const Card = styled.div`
  padding: 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-estart;
  align-self: auto;
  min-height: auto;

  @media (min-width: 0px) {
    width: 80%;
    height: auto;
    align-self: center;
  }
  @media (min-width: 768px) {
    width: 60%;
    height: auto;
    align-self: center;
  }
  @media (min-width: 992px) {
    max-width: 30%;
    height: auto;
    margin-left: 0;
    align-self: auto;
  }
  @media (min-width: 1220px) {
    max-width: 25%;
    height: auto;
    margin-left: 0%;
    align-self: auto;
  }
`
export const Separator = styled.div`
height: 2rem;
`

export default LoginWrapper;
