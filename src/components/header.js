import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

const HeaderContainer = styled.header`
  /* background-color: #01009a; */
  background-color: white;
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
      <Navbar />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
