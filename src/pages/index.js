import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Chakra from "@chakra-ui/react"
import BackgroundImage from "../images/background.png"
import Hero from "../components/hero"
import CTA from "../components/cta"
import Footer from "../components/footer"
import FunctionsList from "../components/functions"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Chakra.Box width="100%" position="relative" overflow="hidden">
    <Chakra.Image
      alt="image"
      src={BackgroundImage}
      position="absolute"
      width="100%"
      height="100%"
    ></Chakra.Image>
    <Layout>
      <Seo title="Home" />
      <Hero />
      <FunctionsList />
      <CTA />
    </Layout>
  </Chakra.Box>
)

export default IndexPage
