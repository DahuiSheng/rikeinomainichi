import { Container, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Header />
    // <Container>
    //   <Heading as = "h1" fontSize="3xl" mt="10">
    //     こんにちは、理系カップルの毎日です.
    //   </Heading>
    // </Container>
  )
}

export default Home;