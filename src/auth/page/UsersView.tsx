import {  GridItem,  HStack, Heading,  Button, SimpleGrid, SlideFade, Box, } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { TiPlus } from "react-icons/ti"
import { UserCard } from "../../components";
import { useUsers } from "../hooks/useUsers";
import { LoadingUsersPage } from "./";


export const UsersView = () => {
    const navigate = useNavigate();
   

    const { users } = useUsers();
    

    const onRegisterClick = () => {
        return navigate('/user-register');
    }


    if( users.isLoading ){
        return <LoadingUsersPage />
    }

    return (

        <Box 
            height='85vh'
            bgColor='white' 
            borderRadius='50' 
            p={10}
        >
            <HStack w='full'  h="fit-content" p={5} spacing={10} align='start' >
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
                <SimpleGrid columns={3} spacing={2} rowGap={6} w='full' >
                        {
                            users.data?.map( (user) => (
                                <SlideFade in={ users.isFetched } delay={0.2} offsetX={200} key={user._id}>
                                    <UserCard 
                                        id={user._id}
                                        name={user.name} 
                                        lastname={user.lastname} 
                                        devTitle={user.devTitle}    
                                        stack={ user.stack }                            
                                    />

                                </SlideFade>
                            ))
                        }
                </SimpleGrid>
            </HStack>

           
        </Box>
    )
}
