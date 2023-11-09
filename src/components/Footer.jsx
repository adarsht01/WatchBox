import React from 'react'
import {Text,Box,Button,HStack,Heading, Stack, VStack,Input} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai';
const year=new Date().getFullYear();
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
    <Stack direction={['column','row']}>
    <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscrbe to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} p={2}>
        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
            <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
    WATCH BOX
    </Heading>
    <Text>All rights reserved ©️ {year}</Text>
    </VStack>
    <VStack w={'full'}>
    <Heading size={'md'} textTransform={'uppercase'}>Check Out </Heading>
    <Button variant={'link'} colorScheme={'purple'}><a href="https://github.com/adarsht01">Github</a></Button>
    <Button variant={'link'} colorScheme='purple'><a href='https://auth.geeksforgeeks.org/user/adarshthakur1106/practice'>GFG</a></Button>

    
    </VStack>
    </Stack>
    </Box>
  )
}

export default Footer;