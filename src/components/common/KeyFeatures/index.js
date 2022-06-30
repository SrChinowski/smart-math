import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../Text';
import Heading from '../Heading';
import NextImage from '../Image';
import FeatureBlock from '../FeatureBlock';
import { SectionHeader } from '../../../app.styles';
import { SectionWrapper, FeatureWrapper } from './keyFeatures.style';

import {keyFeatures} from '../../../assets/data';
import Container from '../../containers/Container';

const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading content={title} />
            <Text content={slogan} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade up delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                icon={
                  <Fragment>
                    <NextImage src={item.icon} alt={item.title} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
