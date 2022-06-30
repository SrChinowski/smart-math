import React from 'react';
import Logo from '../Logo';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from '../Button';
import Container from '../../containers/Container';
import NextImage from '../Image';
import Text from '../Text';
import Heading from '../Heading';
import { SectionHeader } from '../../../app.styles';
import FeatureBlock from '../FeatureBlock';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './experience.style';
import { experiences } from '../../../assets/data';
import Image from '../Image';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;

  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
 
  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ExperienceMainWrap>
          <VideoArea onClick={handleVideoModal}>
            <Image src={video_theme} alt="Microsoft" />
            <Button
              className="video__btn"
              icon={<Icon className="plus" icon={ic_play_arrow} />}
            />
          </VideoArea>
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    objectFit="cover"
                    className="experience__image"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={'Companies who worked with us proudly'} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
