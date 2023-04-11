import {  GridItem,  HStack, Heading,  Button, SimpleGrid,  } from "@chakra-ui/react"
import { redirect, useNavigate } from 'react-router-dom'
import { TiPlus } from "react-icons/ti"
import { UserCard } from "../components";


export const UsersView = () => {
    const navigate = useNavigate();

    const onRegisterClick = () => {
        console.log("Im here...")
        return navigate('/user-register');
    }

    return (
        <GridItem
            colSpan={{ sm: 12, md:12, lg: 10}} 
            rowSpan={{ xl: 10, sm: 12}} 
            w={{ sm: '97%', lg: 'full'}}
            bgColor='white' 
            borderRadius='50' 
            p={10} 
            overflowY='auto' 
            justifySelf={{sm: 'center', md: 'center'}}
        >
            <HStack w='full'  h="fit-content" p={10} spacing={10} align='start' >
                <HStack spacing={3} justifyContent='space-between' w='full'>
                    <Heading size="xl" alignSelf='center' fontWeight='semibold' fontFamily='monospace'>Usuarios</Heading>
                    
                    <GridItem colSpan={2} >
                        <Button 
                            size='lg' 
                            leftIcon={ <TiPlus /> } 
                            w='full' 
                            borderRadius='3xl' 
                            bgColor='#1F1C2F' 
                            _hover={{ bg:'#3b365b'}} 
                            color='white' 
                            onClick={ onRegisterClick }
                        >
                            Agregar
                        </Button>
                    </GridItem>
                </HStack>

            </HStack>
            <HStack>
                <SimpleGrid columns={3} columnGap={3} rowGap={6} w='full' >
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </SimpleGrid>
            </HStack>


        </GridItem>
    )
}
