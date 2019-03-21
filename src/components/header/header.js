import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Nav from 'components/header/nav';
import { Image } from 'rebass'

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = logo => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Image src={logo} alt="Logo" />
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
