import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Hero = styled.div`
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const HeroText = styled.div`
  margin: 3rem 4rem;
  max-width: ${props => props.theme.maxLarge};
  width: 40%;
  h1 {
    color: rgba(256, 256, 256, 0.7);
  }
  h4 {
    color: rgba(256, 256, 256, 0.7);
  }
`
const BoxContainer = styled.section`
  display: flex;
  justify-content: center;
`
const BoxArea = styled.div`
  flex-basis: 100%;
  display: grid;
  margin: 6rem 4rem;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  max-width: ${props => props.theme.maxWidth};
`
const Box = styled.div`
  background-color: ${props => props.theme.lightGrey};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
const BoxImg = styled.div`
  height: 200px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`
const BoxText = styled.div`
  display: block;
  padding: 0 1rem 1rem 1rem;
`
const LowerContainer = styled.section`
  width: 100%;
  /* background-color: ${props => props.theme.lightGrey}; */
  display: flex;
  justify-content: center;
`
const LowerGrid = styled.div`
  max-width: ${props => props.theme.maxWidth};
  flex-basis: 100%;
  margin: 4rem 4rem 0 4rem;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "cText cForm cForm";
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.maxMedium}) {
    grid-template-areas:
      "cText cText cText"
      "cForm cForm cForm";
  }
`
const Contact = styled.div`
  grid-area: cText;
`
const ContactForm = styled.div`
  grid-area: cForm;
  .form-field {
    position: relative;
    margin: 32px 2rem;

    @media (max-width: 900px) {
      margin: 32px 0;
    }
  }
  .input-text {
    display: block;
    width: 100%;
    height: 40px;
    border: none;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
    @media (max-width: 900px) {
      width: 70%;
    }
  }
  .area {
    width: 100%;
    height: 100px;
    border: none;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  .label {
    position: absolute;
    left: 10px;
    top: -28px;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #888;
    cursor: text;
    transition: transform 0.2s ease-in-out;
  }
  .submit-btn {
    display: inline-block;
    background-color: ${props => props.theme.accent};
    color: #fff;
    font-family: "Open Sans Condensed", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const Inputs = styled.div`
  display: flex;
  > * {
    width: 100%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <Layout>
          <Hero
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6))
                , url(
                ${
                  data.wordpressPage.better_featured_image.media_details.sizes
                    .large.source_url
                })`,
            }}
          >
            <HeroText>
              <h1>{data.wordpressPage.acf.hero_title}</h1>
              <h4>{data.wordpressPage.acf.hero_text}</h4>
            </HeroText>
          </Hero>
          <BoxContainer>
            <BoxArea>
              <Box>
                <Link to={data.wordpressPage.acf.box_1_url}>
                  <BoxImg
                    style={{
                      backgroundImage: `url(${
                        data.wordpressPage.acf.box_1_img.localFile
                          .childImageSharp.fixed.src
                      })`,
                    }}
                  />
                  <BoxText>
                    <h3>{data.wordpressPage.acf.box_1_title}</h3>
                    <p>{data.wordpressPage.acf.box_1_text}</p>
                  </BoxText>
                </Link>
              </Box>
              <Box>
                <Link to={data.wordpressPage.acf.box_2_url}>
                  <BoxImg
                    style={{
                      backgroundImage: `url(${
                        data.wordpressPage.acf.box_2_img.localFile
                          .childImageSharp.fixed.src
                      })`,
                    }}
                  />
                  <BoxText>
                    <h3>{data.wordpressPage.acf.box_2_title}</h3>
                    <p>{data.wordpressPage.acf.box_2_text}</p>
                  </BoxText>
                </Link>
              </Box>
              <Box>
                <Link to={data.wordpressPage.acf.box_3_url}>
                  <BoxImg
                    style={{
                      backgroundImage: `url(${
                        data.wordpressPage.acf.box_3_img.localFile
                          .childImageSharp.fixed.src
                      })`,
                    }}
                  />
                  <BoxText>
                    <h3>{data.wordpressPage.acf.box_3_title}</h3>
                    <p>{data.wordpressPage.acf.box_3_text}</p>
                  </BoxText>
                </Link>
              </Box>
            </BoxArea>
          </BoxContainer>
          <LowerContainer
            style={{
              backgroundImage: `url(
                ${
                  data.wordpressPage.acf.background.localFile.childImageSharp
                    .fixed.src
                })`,
            }}
          >
            <LowerGrid>
              <Contact>
                <h3>{data.wordpressPage.acf.contact_title}</h3>
                <p>{data.wordpressPage.acf.contact_text}</p>
              </Contact>
              <ContactForm>
                <form>
                  <Inputs>
                    <div class="form-field col x-50">
                      <input
                        id="name"
                        class="input-text js-input"
                        type="text"
                        required
                      />
                      <label class="label" for="name">
                        Name (Required)
                      </label>
                    </div>
                    <div class="form-field col x-50">
                      <input
                        id="email"
                        class="input-text js-input"
                        type="email"
                        required
                      />
                      <label class="label" for="email">
                        E-mail (Required)
                      </label>
                    </div>
                  </Inputs>
                  <Inputs>
                    <div class="form-field">
                      <input
                        id="number"
                        class="input-text"
                        type="number"
                        required
                      />
                      <label class="label" for="number">
                        Phone Number (Optional)
                      </label>
                    </div>
                    <div class="form-field">
                      <input
                        id="location"
                        class="input-text"
                        type="text"
                        required
                      />
                      <label class="label" for="text">
                        Your Location
                      </label>
                    </div>
                  </Inputs>
                  <div class="form-field col x-100">
                    <textarea
                      id="message"
                      class="area js-input"
                      type="text"
                      required
                    />
                    <label class="label" for="message">
                      Message
                    </label>
                  </div>
                  <div class="form-field col x-100 align-center">
                    <input class="submit-btn" type="submit" value="Submit" />
                  </div>
                </form>
              </ContactForm>
            </LowerGrid>
          </LowerContainer>
        </Layout>
      </div>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "home" }) {
      title
      slug
      content
      better_featured_image {
        media_details {
          sizes {
            large {
              source_url
            }
          }
        }
      }
      acf {
        hero_title
        hero_text
        hero_button
        hero_url
        box_1_title
        box_1_text
        box_1_url
        box_1_img {
          localFile {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        box_2_title
        box_2_text
        box_2_url
        box_2_img {
          localFile {
            childImageSharp {
              fixed(width: 300) {
                src
              }
            }
          }
        }
        box_3_title
        box_3_text
        box_3_url
        box_3_img {
          localFile {
            childImageSharp {
              fixed(width: 400) {
                src
              }
            }
          }
        }
        contact_title
        contact_text
        background {
          localFile {
            childImageSharp {
              fixed(width: 400) {
                src
              }
            }
          }
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
