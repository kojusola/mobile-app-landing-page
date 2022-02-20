import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import EmptyImageCta from "../images/empty-image-cta.png"
import EmptyImageCtaSmall from "../images/empty-image-small-cta.png"
import GooglePlay from "../images/google-play.inline.svg"
import Apple from "../images/apple.inline.svg"

const Cta = ({ siteTitle }) => (
  <Chakra.Box width="100%">
    <Chakra.Box
      mt="38px"
      width="100%"
      maxWidth="1240px"
      backgroundColor="#5446F1"
      mx="auto"
      display="flex"
      flexDirection={{ base: "column", xl: "row" }}
      alignItems="center"
      justifyContent={{ xl: "center" }}
      borderRadius={{ base: "0px", xl: "40px" }}
      pt={{ base: "32px", xl: "41px" }}
      height="500px"
      overflow="hidden"
    >
      <Chakra.Box
        maxWidth={{ base: "100%", xl: "534px" }}
        textAlign={{ base: "center", xl: "left" }}
        width="100%"
      >
        <Chakra.Text
          color="#F8F8F8"
          fontSize={{ base: "24px", md: "48px" }}
          lineHeight={{ base: "36px", md: "72px" }}
          fontWeight="700"
          fontFamily="Public Sans"
        >
          Explore and create more with{" "}
          <Chakra.Box as="span" color={{ base: "#F8F8F8", xl: "#FF912B" }}>
            SnapShot
          </Chakra.Box>
        </Chakra.Text>
        <Chakra.Box
          display="flex"
          width="100%"
          alignContent="center"
          justifyContent={{ base: "center", xl: "flex-start" }}
          mt="16px"
        >
          <Chakra.Box
            as="span"
            display="flex"
            bgColor="#FF912B"
            color="#FFFFFF"
            fontSize="16px"
            lineHeight="21px"
            alignItems="center"
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
      </Chakra.Box>
      <Chakra.Image
        alt="image"
        mr="-70px"
        ml="-50px"
        src={EmptyImageCta}
        display={{ base: "none", xl: "flex" }}
      />
      <Chakra.Box
        mt="40px"
        width="100%"
        alignItems="center"
        justifyContent="center"
        display="flex"
        display={{ base: "flex", xl: "none" }}
      >
        <Chakra.Image
          alt="image"
          mr="-120px"
          ml="-120px"
          mt="40px"
          src={EmptyImageCtaSmall}
        />
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Cta
