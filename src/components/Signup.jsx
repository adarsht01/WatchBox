import React from 'react'
import {Text, Button, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
    <form action=''>
        <VStack alignItems={"stretch"} spacing={'8'} w={['full','96']} m={'auto'} my={'13'}>
        <Heading justifyContent={'center'} >Welcome to WatchBox</Heading>
        <Avatar alignSelf={'center'} boxSize={'60px'}></Avatar>
        <Input placeholder='email' type='email' required focusBorderColor='purple.500'/>
        <Input placeholder='password' type='password' required focusBorderColor='purple.500'/>
        <Input placeholder='confirm Password' type='password' required focusBorderColor='purple.500'/>

        <Button type='submit'>SignUp</Button>
        <Text textAlign={'right'}>
         Already Signed Up?{" "}
         <Button variant={'link'} colorScheme='purple'><Link to ={'/login'}>Log In</Link></Button>
        </Text>
        </VStack>
    </form>
    </Container>
  )
}

export default Signup