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
  ul {
    display: grid;
    margin: 4rem 0;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    li {
      list-style-type: none;
      img {
        margin: 0;
      }
      h4 {
        margin: 0;
      }
    }
  }
`

class Projects extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <PageContainer>
          <PageText>
            <h2>{data.wordpressPage.title}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content,
              }}
            />
            <ul>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_1_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_1_text}</h4>
              </li>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_2_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_2_text}</h4>
              </li>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_3_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_3_text}</h4>
              </li>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_4_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_4_text}</h4>
              </li>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_5_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_5_text}</h4>
              </li>
              <li>
                <img
                  src={
                    data.wordpressPage.acf.project_6_image.localFile
                      .childImageSharp.fixed.src
                  }
                />
                <h4>{data.wordpressPage.acf.project_6_text}</h4>
              </li>
            </ul>
          </PageText>
        </PageContainer>
      </Layout>
    )
  }
}

export default Projects

export const projectsQuery = graphql`
  query {
    wordpressPage(slug: { eq: "projects" }) {
      title
      content
      acf {
        project_1_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_1_text
        project_2_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_2_text
        project_3_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_3_text
        project_4_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_4_text
        project_5_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_5_text
        project_6_image {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        project_6_text
      }
    }
  }
`
