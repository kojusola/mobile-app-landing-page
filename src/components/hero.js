import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import GooglePlay from "../images/google-play.inline.svg"
import Apple from "../images/apple.inline.svg"
import HeroPhoneOne from "../images/hero-phone-one.png"
import HeroPhoneSmallOne from "../images/hero-phone-small-one.png"
import HeroPhoneSmallTwo from "../images/hero-phone-small-two.png"
import HeroPhoneTwo from "../images/hero-phone-two.png"

const Hero = ({ siteTitle }) => (
  <Chakra.Box
    width="100%"
    maxWidth="1071px"
    mx="auto"
    px={{ base: "24px", xl: "38px" }}
    pt="64px"
  >
    <Chakra.Text
      color="#17191C"
      fontWeight="700"
      fontSize={{ base: "36px", md: "54px" }}
      lineHeight={{ base: "54px", md: "84px" }}
      letterSpacing="0.04em"
      textAlign="center"
      fontFamily="Public Sans"
    >
      Create and share memories using your phone.
    </Chakra.Text>
    <Chakra.Box maxWidth="757px" mx="auto">
      <Chakra.Text
        color="#ABABAB"
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="0.04em"
        textAlign="center"
        fontFamily="Open Sans"
        pt="16px"
      >
        Lorem ipsum dolor sit amet, consectetur adi piscing elit. Gravida hac
        commodo fermentu ac lectus scelerisque feugiat donec enim. Quis at
        hendrerit natoque rhoncus, quis eu consequat ipsum sodales.
      </Chakra.Text>
    </Chakra.Box>
    <Chakra.Box
      w="100%"
      display="flex"
      pt="24px"
      justifyContent="center"
      alignItems="center"
    >
      <Chakra.Box
        as="span"
        display="flex"
        bgColor="#FF912B"
        color="#FFFFFF"
        fontSize="16px"
        lineHeight="21px"
        alignItems="center"
        letterSpacing="0.02"
        fontWeight="500"
        px="16px"
        py="12px"
        borderRadius="8px"
        fontFamily="Public Sans"
      >
        <GooglePlay />
        <Chakra.Box as="span" ml="12px">
          Download
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        as="button"
        display="flex"
        bgColor="#786CFA"
        color="#FFFFFF"
        fontSize="16px"
        lineHeight="21px"
        alignItems="center"
        letterSpacing="0.02"
        fontWeight="500"
        ml={{ base: "24px", md: "32px" }}
        px="16px"
        py="12px"
        borderRadius="8px"
        fontFamily="Public Sans"
      >
        <Apple />
        <Chakra.Box as="span" ml="12px">
          Download
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
    <Chakra.Box
      width="100%"
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="80px"
    >
      <Chakra.Image
        alt="Hero Image"
        src={HeroPhoneOne}
        zIndex="2"
        mr="-23%"
        display={{ base: "none", md: "flex" }}
      />
      <Chakra.Image
        alt="Hero Image"
        src={HeroPhoneTwo}
        display={{ base: "none", md: "flex" }}
      />
      <Chakra.Image
        alt="Hero Image"
        src={HeroPhoneSmallOne}
        zIndex="2"
        display={{ base: "flex", md: "none" }}
        css={{
          "@media(max-width: 768px)": {
            marginRight: "-15%",
          },
          "@media(max-width: 600px)": {
            marginRight: "-25%",
          },
          "@media(max-width: 420px)": {
            marginRight: "-40%",
          },
        }}
      />
      <Chakra.Image
        alt="Hero Image"
        src={HeroPhoneSmallTwo}
        display={{ base: "flex", md: "none" }}
      />
    </Chakra.Box>
  </Chakra.Box>
)

export default Hero
