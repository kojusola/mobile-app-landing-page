import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import GooglePlay from "../images/google-play.inline.svg"
import Apple from "../images/apple.inline.svg"
import HeroPhoneOne from "../images/hero-phone-one.png"
import HeroPhoneSmallOne from "../images/hero-phone-small-one.png"
import HeroPhoneSmallTwo from "../images/hero-phone-small-two.png"
import HeroPhoneTwo from "../images/hero-phone-two.png"
import { chakra } from "@chakra-ui/react"

const Cta = ({ siteTitle }) => (
  <Chakra.Box
    width="100%"
    maxWidth="1109px"
    mt={{ base: "80px", lg: "112px" }}
    mx="auto"
    px={{ base: "24px", xl: "38px" }}
    display="flex"
    justifyContent={{ base: "center", lg: "space-between" }}
    flexDirection={{ base: "column", lg: "row" }}
    textAlign={{ base: "center", lg: "left" }}
  >
    <Chakra.Box color="#17191C" mb={{ base: "24px", lg: "99px" }}>
      <Chakra.Text
        fontFamily="Public Sans"
        fontWeight="700"
        fontSize="20px"
        lineHeight="30px"
        mb="0px"
      >
        Company
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Careers
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        News
      </Chakra.Text>
    </Chakra.Box>
    <Chakra.Box color="#17191C" mb={{ base: "24px", lg: "99px" }}>
      <Chakra.Text
        fontFamily="Public Sans"
        fontWeight="700"
        fontSize="20px"
        lineHeight="30px"
        mb="0px"
      >
        Legal
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Privacy Center
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Cookie Policy
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Cookie Settings
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Report Infringement
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Custom Creative Tools Terms
      </Chakra.Text>
    </Chakra.Box>
    <Chakra.Box color="#17191C" mb={{ base: "24px", lg: "99px" }}>
      <Chakra.Text
        fontFamily="Public Sans"
        fontWeight="700"
        fontSize="20px"
        lineHeight="30px"
        mb="0px"
      >
        Community
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Support Community
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Guidelines
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Safety Center
      </Chakra.Text>
    </Chakra.Box>
    <Chakra.Box color="#17191C" mb={{ base: "24px", lg: "99px" }}>
      <Chakra.Text
        fontFamily="Public Sans"
        fontWeight="700"
        fontSize="20px"
        lineHeight="30px"
        mb="0px"
      >
        Advertising
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Buy Ads
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Advertising Policies
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Political Ads Library
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Brand Guidelines
      </Chakra.Text>
      <Chakra.Text
        fontFamily="Public Sans"
        fontSize="16px"
        lineHeight="30px"
        mb="0px"
      >
        Promotions Rules
      </Chakra.Text>
    </Chakra.Box>
  </Chakra.Box>
)

export default Cta
