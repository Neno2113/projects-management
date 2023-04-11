import { GridItem, HStack, Icon, Text, InputGroup, InputLeftElement, Input, IconButton, Divider, Wrap, WrapItem, Avatar } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci"
import { RiMenu5Fill } from "react-icons/ri"
import { TiPlus } from "react-icons/ti"

export const AppBar = () => {
  return (
    <GridItem colSpan={12}  w='full'>
        <HStack justifyContent={{ xl: 'space-between', sm:'center'}} px={10} py={5} w='full'>
            <HStack spacing={{ sm: 1, md: 10, xl: 20}} w={{ lg: '60%', md: '40%'}}>
                <Icon 
                    as={ RiMenu5Fill  } 
                    boxSize={30}
                />
                <Text 
                    as='b'
                    fontSize='3xl'
                    display={{ sm: 'none', lg:'flex'}}
                >
                    Projects
                </Text>
                <InputGroup w={{ sm: '80%', xl:'40%'}}>
                    <InputLeftElement 
                        children={<CiSearch />}
                    />
                    <Input 
                        placeholder='Search' 
                        variant='outline' 
                        borderRadius='3xl' 
                        border='1px' 
                        borderColor='gray.500'
                        bgColor='white'
                    />
                </InputGroup>
            </HStack>

            <HStack justifyContent='flex-end' w={{ sm:'80%'}} h='100%' pr={10}>
                <IconButton 
                    bgColor='#1F1C2F'
                    aria-label='Search database' 
                    icon={ <TiPlus /> }
                    borderRadius='full'
                    color='white'
                    _hover={{ bg: "#3d3a54"  }}
                />
                <Wrap>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Text alignSelf='center' as='b' ml={2}>Anel D.</Text>
                    </WrapItem>
                </Wrap>

            </HStack>
        </HStack>

    </GridItem>
  )
}
