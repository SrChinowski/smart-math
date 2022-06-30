import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../Text';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Heading from '../Heading';
import NextImage from '../Image';
import Container from '../../containers/Container';
import BarCode from '../../../assets/images/bar-code.png';
import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
  Subscribe,
  SubscribeField,
  BarCodeArea,
} from './availableStore.style';

import { availableStore } from '../../../assets/data';

const AvailableStore = () => {
  const { title, description, thumb, numberPrefix } = availableStore;
  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          <Subscribe>
            <SubscribeField>
              <Select
                options={numberPrefix}
                placeholder="+14"
                className="phone_search_select"
                aria-label="select options"
              />
              <Input
                inputType="text"
                placeholder="Phone Number"
                iconPosition="left"
                aria-label="number"
              />
            </SubscribeField>
            <Button title="Send" type="submit" />
          </Subscribe>
          <BarCodeArea>
            <Button
              className="bar__code"
              variant="textButton"
              icon={<NextImage src={BarCode} alt="Scan" />}
              iconPosition="left"
              title="Scan to download"
            />
          </BarCodeArea>
        </TextWrapper>
        <ThumbWrapper>
          <Fade right>
            <NextImage src={thumb} alt="App Image" />
          </Fade>
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AvailableStore;
