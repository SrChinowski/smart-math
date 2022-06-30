import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Container from '../../containers/Container'
import illustration from '../../../assets/images/shapeLeft1.png';
import illustration2 from '../../../assets/images/shapeRight1.png';
import SectionWrapper, {
  Content,
  ButtonWrap,
  ContentWrap,
} from './callToAction.style';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <img src={illustration} alt="shape" />
          <img src={illustration2} alt="shape" />
          <ContentWrap>
            <Heading
              as="h3"
              content="Do you have idea to make better? Contact our support team"
            />
            <ButtonWrap>
              <Button title="Contact Us" />
            </ButtonWrap>
          </ContentWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
