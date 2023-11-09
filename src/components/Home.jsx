import React from 'react'
import{Box,Heading,Image,Container, Stack,Text}from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  translate:"uppercase",
  p:"-4",
  size:"4xl"
}
const Home = () => {
  return (
    <Box>
    <Mycarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
    <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
    <Stack h='full' p='4' alignItems={'center'} direction={['column','row']}>
    <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </Text>
    </Stack>
    </Container>
    </Box>
  )
  }
  const Mycarousel=()=>(
    <Carousel autoPlay infiniteLoop={true} interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={'full'} h={'100vh'}>
    <Image src={img1}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Watch and experience
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img2}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Gaming is what we see in coming future
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img3}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Gaming Console
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img4}/>
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      NighLife fun with Gaming
    </Heading>
    </Box>
    </Carousel>
  );

export default Home;