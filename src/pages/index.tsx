import { Container, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react";

const Home: NextPage = () => {
  return (
    <Container>
      <Heading as = "h1" fontSize="3xl" mt="10">
        こんにちは、理系カップルの毎日です.
      </Heading>
    </Container>
  )
}

export default Home;