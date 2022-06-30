import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from '../Link';
import Heading from '../Heading';
import NextImage from '../Image';
import Text from '../Text';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';

import { footerWidget } from '../../../assets/data';
import Container from '../../containers/Container';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <NextImage src={footerWidget.logo} alt="Logo" />
              <p>
                © 2020 Team
                <Link href={footerWidget.siteUrl}>
                  <a href='/'>{footerWidget.siteName}</a>
                </Link>
              </p>
              <Text className="copyright" content="All rights reserved." />
              <Nav className="social__share">
                {footerWidget.socialLinks.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <a href='/' className={item.name}>{item.icon}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content={footerWidget.aboutUs.title} />
              <Nav>
                {footerWidget.aboutUs.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a href='/'>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content={footerWidget.ourInformation.title} />
              <Nav>
                {footerWidget.ourInformation.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a href='/'>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={400}>
              <Heading as="h4" content={footerWidget.myAccount.title} />
              <Nav>
                {footerWidget.myAccount.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a href='/'>{item.text}</a>
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
