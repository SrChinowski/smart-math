import React, { useState, useEffect } from 'react';
import Text from '../Text';
import Heading from '../Heading';
import NextImage from '../Image';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';
import Container from '../../containers/Container';
import Button from '../Button';
import { SectionHeader } from '../../../app.styles';
import illustration from '../../../assets/images/shapeLeft2.png';
import illustration2 from '../../../assets/images/shapeRight2.png';
import SectionWrapper, {
  SectionBgArea,
  ContentWrapper,
  ContentPricing,
  PriceTable,
  PricingFeature,
  FeatureItem,
  ContentWrap,
  ButtonWrap,
} from './pricing.style';
import { pricing } from '../../../assets/data';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Pricing = () => {
  const size = process.browser;
  const isTablet = Boolean(size.innerWidth <= 768);
  const { slogan, title, pricingFeature, pricingItems } = pricing;
  useWindowSize()
  return (
    <SectionWrapper id="pricing">
      <SectionBgArea>
        <div className="shape-one">
          <NextImage src={illustration} alt="Shape" />
        </div>
        <div className="shape-two">
          <NextImage src={illustration2} alt="Shape" />
        </div>
      </SectionBgArea>
      <Container>
        <SectionHeader className="text-white">
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ContentWrapper>
          <ContentPricing>
            {!isTablet && (
              <PricingFeature>
                {pricingFeature.map((feature) => (
                  <FeatureItem key={feature.id}>{feature.name}</FeatureItem>
                ))}
              </PricingFeature>
            )}
            {pricingItems.map((priceTable) => (
              <PriceTable
                key={priceTable.id}
                className={priceTable.isRecommended && 'isRecommended'}
              >
                {priceTable.isRecommended && (
                  <div className="recommended">Recommended</div>
                )}

                <h2 className="title">{priceTable.package_name}</h2>
                <div className="price">
                  ${priceTable.price}
                  <span>/ mo.</span>
                </div>
                <ul className="featureList">
                  {priceTable.features.map((feature) => (
                    <FeatureItem key={feature.id}>
                      {isTablet ? (
                        feature.isAvailable ? (
                          feature.name
                        ) : (
                          <Icon
                            icon={closeCircled}
                            size={18}
                            style={{ color: '#CED7E1' }}
                          />
                        )
                      ) : feature.isAvailable ? (
                        <Icon
                          icon={ic_check_circle}
                          size={18}
                          style={{ color: '#3CC68A' }}
                        />
                      ) : (
                        <Icon
                          icon={closeCircled}
                          size={18}
                          style={{ color: '#CED7E1' }}
                        />
                      )}
                    </FeatureItem>
                  ))}
                </ul>
                <Button
                  title="Choose Plan"
                  className={`${
                    !priceTable.isRecommended && 'primaryOutlined'
                  } choosePlan`}
                />
                <p className="trial">{priceTable.trial_day} days free trial</p>
              </PriceTable>
            ))}
          </ContentPricing>
          <ContentWrap>
            <Heading
              as="h3"
              content="Are you looking for custom price? Let’s talk about it."
            />
            <ButtonWrap>
              <Button title="Contact Us Now!" />
            </ButtonWrap>
          </ContentWrap>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
