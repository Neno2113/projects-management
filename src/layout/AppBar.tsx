import { GridItem, HStack, Icon, Text, InputGroup, InputLeftElement, Input, IconButton, Menu, 
    MenuList, MenuItem, Wrap, WrapItem, Avatar, MenuButton } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { BiLogOutCircle } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { RiMenu5Fill } from "react-icons/ri"
import { TiPlus } from "react-icons/ti"
import { useContext } from 'react';
import { AuthContext } from "../auth/context"
import { upperCaseFirstLetter } from "../helpers"

const imgURL = import.meta.env.VITE_IMGURL;

export const AppBar = () => {

    const {  user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onPlusClick = () => {
        navigate('/projects-register')
    }

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
                    onClick={ onPlusClick }
                />
                <Wrap>
                    <WrapItem>
                        <Menu direction="ltr">
                            <MenuButton  >
                                <Avatar name={`${user?.name} ${user?.lastname}`} src={`${imgURL}${user?._id}`} />
                                <Text 
                                    fontSize='xl'  
                                    as='b' 
                                    ml={2}
                                >
                                    { upperCaseFirstLetter(user?.name!)} { user?.lastname.charAt(0).toLocaleUpperCase()}
                                </Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem 
                                    icon={<BiLogOutCircle />} 
                                    onClick={ logout }
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </WrapItem>
                </Wrap>

            </HStack>
        </HStack>

    </GridItem>
  )
}
