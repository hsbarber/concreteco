import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const NavbarContainer = styled.nav`
  margin: 1rem 4rem;
  /* display: flex; */

  a:hover {
    cursor: pointer;
    h4,
    h6 {
      color: #807fcc;
    }
  }
  @media (max-width: ${props => props.theme.maxMedium}) {
    display: block;
  }
`
const NavBarText = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`
const NavBarBrand = styled.div`
  list-style-type: none;
  h4 {
    margin: 0;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
`
const NavBarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  a {
    padding-right: 2rem;
    list-style-type: none;
    h6 {
      margin: 0;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  @media (max-width: ${props => props.theme.maxMedium}) {
    flex-direction: column;
  }
`
const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: menu_order }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <NavbarContainer>
        <NavBarText>
          <NavBarBrand>
            <Link to="/">
              <h4>Concrete Co.</h4>
            </Link>
          </NavBarBrand>
          <NavBarLinks>
            {data.allWordpressPage.edges.map(edge => (
              <Link to={edge.node.slug} key={edge.node.slug}>
                <h6>{edge.node.title}</h6>
              </Link>
            ))}
          </NavBarLinks>
        </NavBarText>
      </NavbarContainer>
    )}
  />
)

export default Navbar

// export const projectsQuery = graphql`
//   query {
//     allWordpressWpApiMenusMenusItems(filter: { slug: { eq: "nav-menu" } }) {
//       edges {
//         node {
//           name
//           items {
//             title
//             url
//             type
//           }
//         }
//       }
//     }
//   }
// `
