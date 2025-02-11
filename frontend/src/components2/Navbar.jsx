import React from 'react'
import { Text, Button, HStack,Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";



const Navbar = () => {
  return (
    <Container maxW={"1140px"} px ={4}>
      <Flex
      h = {16}
      alignItems = {"center"}
      justifyContent = {"space-between"}
      flexDir = {{
        base:"column",
        sm:"row"
      }}
      >
        <Text
        fontSize = {{ base: "22px" , sm: "28" }}
        fontWeight = {"bold"}
        textTransform = {"uppercase"}
        textAlign = {"center"}
        bgGradient = {"linear(to-r, cyan.400, blue.500)"}
        bgClip = {"text"}
        >
          <Link to = {"/"}> Product Store 🛒</Link>
        </Text>

        <HStack spacing = {2} alignItems = {"center"}>
          <Link to = {"/create"}>
            <Button>
              <PlusSquareIcon fontSize = {20} />
            </Button>
          </Link>
          
        </HStack>




      </Flex>

    </Container>
  )
}

export default Navbar