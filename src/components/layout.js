/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./header"
import "./layout.css"

const Body = styled.body`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Black+Han+Sans|Jockey+One");
`
const theme = {
  main: "#243A51",
  accent: "#44318D",
  black: "#3A3A3A",
  lightGrey: "#F4F4F4",
  offWhite: " rgba(256, 256, 256, 0.7)",
  maxMedium: "768px",
  maxLarge: "1200px",
  maxWidth: "1300px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
}
const GlobalStyle = createGlobalStyle`
  h1, h2 {
    font-family: "Jockey One", sans-serif;
    letter-spacing: 2px;
    color: ${props => props.theme.black};
  }
  h3, h4, p, a {
    font-family: "Open Sans Condensed", sans-serif;
    letter-spacing: 2px;
    color: ${props => props.theme.black};
  }
  a {
    color: ${props => props.theme.accent};
  }
`

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-top: 0;
`
const Footer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.main};
  color: white;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem; */
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  padding: 2rem 4rem;
  align-items: center;
  @media (max-width: ${props => props.theme.maxMedium}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  address {
    display: flex;
    flex-direction: column;
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Body>
            <Header siteTitle={data.site.siteMetadata.title} />
            <LayoutContainer>
              <main>{children}</main>
              <Footer>
                <p>©{new Date().getFullYear()}, Concrete Co.</p>
                <address>
                  <h4>Concrete Co.</h4>
                  <p>1234 Concrete Rd.,</p>
                  <p> Sealy TX, 77474</p>
                </address>
                <p>
                  Stay in touch with us:
                  <p>Facebook</p>
                  <p>Twitter</p>
                </p>
              </Footer>
            </LayoutContainer>
          </Body>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
