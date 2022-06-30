import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { closeModal, openModal } from '@redq/reuse-modal';
import Text from '../Text';
import Button from '../Button';
import Heading from '../Heading';
import Container from '../../containers/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

import bannerImg from '../../../assets/images/bannerImg.png';
import bannerImgMobile from '../../../assets/images/availableThumb.png';
import Image from '../Image';
import { Link } from 'react-router-dom';

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

const Banner = () => {
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
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="El conocimiento de la catedral en tus manos 👋"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Accede a nuestros recursos para ayudarte en tus investigaciones." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
            <Link to="/login"><Button className="primary" title="Inicia Sesion"/></Link>
              <div onClick={handleVideoModal}>
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="Como funciona?"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Image src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <Image src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
