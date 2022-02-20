import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import ThunderBolt from "../images/Vector.inline.svg"

const Header = ({ siteTitle }) => (
  <Chakra.Box
    width="100%"
    maxWidth="1440px"
    mx="auto"
    px={{ base: "24px", xl: "38px" }}
    pt="64px"
    alignItems="center"
  >
    <Chakra.Box
      width="100%"
      px={{ base: "0px", xl: "62px" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Chakra.Box display="flex" alignItems="center">
        <ThunderBolt />
        <Chakra.Box
          as="span"
          color="#786CFA"
          paddingLeft="13px"
          fontSize="20px"
          lineHeight="21px"
          fontFamily="Public Sans"
        >
          Snap
          <Chakra.Box as="span" color="#FF912B">
            Shot
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        maxWidth="527px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        <Chakra.Link
          color="#ABABAB"
          fontSize="18px"
          lineHeight="21px"
          fontFamily="Public Sans"
          textAlign="center"
          _hover={{
            color: "#FF912B",
          }}
        >
          Home
        </Chakra.Link>
        <Chakra.Link
          color="#ABABAB"
          fontSize="18px"
          lineHeight="21px"
          _hover={{
            color: "#FF912B",
          }}
          fontFamily="Public Sans"
        >
          Download
        </Chakra.Link>
        <Chakra.Link
          color="#ABABAB"
          fontSize="18px"
          lineHeight="21px"
          _hover={{
            color: "#FF912B",
          }}
          fontFamily="Public Sans"
        >
          Features
        </Chakra.Link>
        <Chakra.Link
          color="#ABABAB"
          fontSize="18px"
          lineHeight="21px"
          _hover={{
            color: "#FF912B",
          }}
          fontFamily="Public Sans"
        >
          About Us
        </Chakra.Link>
        <Chakra.Box
          bgColor="#FF912B"
          color="#FFFFFF"
          fontSize="18px"
          lineHeight="21px"
          alignItems="center"
          px="24px"
          py="14px"
          borderRadius="8px"
          fontFamily="Public Sans"
        >
          Sign Up
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        bgColor="#FF912B"
        color="#FFFFFF"
        fontSize="16px"
        lineHeight="21px"
        alignItems="center"
        letterSpacing="0.02"
        fontWeight="500"
        px="16px"
        py="9px"
        borderRadius="8px"
        display={{ base: "flex", md: "none" }}
        fontFamily="Public Sans"
      >
        Menu
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Header
