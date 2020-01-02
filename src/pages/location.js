import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import LocInfo from "../components/Home/LocInfo"

const LocationPage = ({data}) => (
  <Layout>
    <SEO title="Location" />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid}
    title="Location"
    styleClass="about-background"
    />
    <LocInfo/>
  </Layout>
)

export const query = graphql `
{
  img:file(relativePath:{eq:"map.jpg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default LocationPage