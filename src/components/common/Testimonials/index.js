import React from 'react';
import Link from '../Link';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import Masonry from 'react-masonry-component';
import Box from '../Box';
import Text from '../Text';
import Heading from '../Heading';
import NextImage from '../Image';
import Container from '../../containers/Container';
import { SectionHeader } from '../../../app.styles';
import SectionWrapper, {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialItemInner,
  TestimonialHead,
  AuthorImage,
} from './testimonial.style';
import { testimonial } from '../../../assets/data';

const masonryOptions = {
  originTop: true,
};

const TestimonialSection = () => {
  const { slogan, title, reviews } = testimonial;
  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <TestimonialWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {reviews.map((item) => (
              <TestimonialItem key={`testimonial-item-${item.id}`}>
                <TestimonialItemInner>
                  <TestimonialHead>
                    <AuthorImage>
                      <NextImage src={item.avatar} alt={item.name} />
                    </AuthorImage>
                    <Box>
                      <Heading as="h3" content={item.name} />
                      <Text content={item.designation} />
                    </Box>
                    <Link href="/">
                      <a aria-label="twitter" href="/">
                        <Icon icon={twitter} size={24} />
                      </a>
                    </Link>
                  </TestimonialHead>
                  <Text content={item.description} />
                </TestimonialItemInner>
              </TestimonialItem>
            ))}
          </Masonry>
        </TestimonialWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialSection;
