import React from 'react';
import Text from '../Text';
import NextImage from '../Image';
import Heading from '../Heading';
import FeatureBlock from '../FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import {chooseUs} from '../../../assets/data';
import Container from '../../containers/Container';

const ChooseUs = () => {
  const { title, thumb, features } = chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
          <NextImage src={thumb} alt="App Image" />
        </ThumbWrapper>

        <TextWrapper>
          <Heading content={title} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
