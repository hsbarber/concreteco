import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PageContainer = styled.section`
  margin: 4rem;
  display: flex;
  justify-content: center;
`
const PageText = styled.div`
  max-width: ${props => props.theme.maxWidth};
`
const AboutContainer = styled.div`
  display: flex;
  div {
    padding-left: 4rem;
  }
`
class About extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <PageContainer>
          <PageText>
            <h2>{data.wordpressPage.title}</h2>
            <AboutContainer>
              <img
                src={
                  data.wordpressPage.acf.about_image.localFile.childImageSharp
                    .fixed.src
                }
              />
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: data.wordpressPage.content,
                }}
              />
            </AboutContainer>
          </PageText>
        </PageContainer>
      </Layout>
    )
  }
}

export default About

export const projectsQuery = graphql`
  query {
    wordpressPage(slug: { eq: "about" }) {
      title
      content
      acf {
        about_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
      }
    }
  }
`
