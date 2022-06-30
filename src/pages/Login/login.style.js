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
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`
export const Card = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: auto;
  min-height: 400px;

  @media (min-width: 0px) {
    width: 80%;
    height: 50vh;
    align-self: center;
  }
  @media (min-width: 768px) {
    width: 60%;
    height: 50vh;
    align-self: center;
  }
  @media (min-width: 992px) {
    max-width: 30%;
    height: 50vh;
    margin-left: 10%;
    align-self: auto;
  }
  @media (min-width: 1220px) {
    max-width: 25%;
    height: 50vh;
    margin-left: 10%;
    align-self: auto;
  }
`
export const Separator = styled.div`
height: 1.5rem;
`

export default LoginWrapper;
