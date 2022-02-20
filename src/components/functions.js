import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import YellowBlueImage from "../images/yellow-blue.png"
import YellowBlueSmall from "../images/yellow-blue-small-image.png"
import BlueSmall from "../images/functions-blue-image.png"
import { Flex } from "@chakra-ui/react"

const FunctionsList = ({ siteTitle }) => (
  <Chakra.Box
    width="100%"
    maxWidth="1146px"
    mx="auto"
    px={{ base: "24px", xl: "38px" }}
    pt={{ base: "80px", md: "112px" }}
    overflow="hidden"
  >
    <Chakra.Box
      display={{ base: "block", lg: "flex" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
    >
      <Chakra.Box
        maxWidth={{ base: "100%", lg: "525px" }}
        width="100%"
        textAlign={{ base: "center", lg: "left" }}
      >
        <Chakra.Text
          fontFamily="Public Sans"
          fontWeight="700"
          fontSize={{ base: "24px", md: "48px" }}
          lineHeight={{ base: "36px", md: "72px" }}
          letterSpacing="0.02em"
          color="#000000"
        >
          Use Customized Filter On Your Shots
        </Chakra.Text>
        <Chakra.Text
          pt="24px"
          fontFamily="Public Sans"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.02em"
          color="#ABABAB"
        >
          Lorem ipsum dolor sit amet, consectetur adi piscing elit. Gravida hac
          commodo fermentu ac lectus scelerisque feugiat donec enim. Quis at
          hendrerit natoque rhoncus, quis eu consequat ipsum sodales.
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box
        display="flex"
        width={{ base: "100%", lg: "auto" }}
        alignItems="center"
        justifyContent="center"
      >
        <Chakra.Image
          alt="Yellow Image"
          src={YellowBlueImage}
          zIndex="2"
          ml="-70px"
          mr="-180px"
          display={{ base: "none", md: "flex" }}
        ></Chakra.Image>
        <Chakra.Image
          alt="Blue Image"
          src={YellowBlueSmall}
          display={{ base: "flex", md: "none" }}
        ></Chakra.Image>
      </Chakra.Box>
    </Chakra.Box>
    <Chakra.Box
      display={{ base: "block", lg: "flex" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
    >
      <Chakra.Box
        display="flex"
        width={{ base: "100%", lg: "auto" }}
        alignItems="center"
        justifyContent="center"
        display={{ base: "none", lg: "flex" }}
      >
        <Chakra.Image
          alt="Yellow Image"
          src={YellowBlueImage}
          zIndex="2"
          mr="-70px"
          ml="-130px"
          display={{ base: "none", md: "flex" }}
        ></Chakra.Image>
      </Chakra.Box>
      <Chakra.Box
        maxWidth={{ base: "100%", lg: "553px" }}
        width="100%"
        textAlign={{ base: "center", lg: "left" }}
      >
        <Chakra.Text
          fontFamily="Public Sans"
          fontWeight="700"
          fontSize={{ base: "24px", md: "48px" }}
          lineHeight={{ base: "36px", md: "72px" }}
          letterSpacing="0.02em"
          color="#000000"
        >
          Send and receive shots from your friends.
        </Chakra.Text>
        <Chakra.Text
          pt="24px"
          fontFamily="Public Sans"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.02em"
          color="#ABABAB"
        >
          Lorem ipsum dolor sit amet, consectetur adi piscing elit. Gravida hac
          commodo fermentu ac lectus scelerisque feugiat donec enim. Quis at
          hendrerit natoque rhoncus, quis eu consequat ipsum sodales.
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box
        display="flex"
        width={{ base: "100%", lg: "auto" }}
        alignItems="center"
        justifyContent="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Chakra.Image
          alt="Yellow Image"
          src={YellowBlueImage}
          zIndex="2"
          ml="-70px"
          mr="-180px"
          display={{ base: "none", md: "flex" }}
        ></Chakra.Image>
        <Chakra.Image
          alt="Blue Image"
          src={YellowBlueSmall}
          display={{ base: "flex", md: "none" }}
        ></Chakra.Image>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default FunctionsList
