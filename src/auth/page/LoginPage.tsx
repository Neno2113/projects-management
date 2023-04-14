import { Container, GridItem, Grid, VStack, Heading, Input, FormLabel, FormControl, Button, 
    InputGroup, InputRightElement, FormErrorMessage, Fade } from "@chakra-ui/react"
import { BiUserCircle } from "react-icons/bi"
import { RiLockPasswordLine } from "react-icons/ri"

import { useLogin } from '../hooks/useLogin';

export const LoginPage = () => {

    const { isPasswordValid, isUserNameValid, onChange, onLoginClick, formErrors, isaAuthenticating } = useLogin();

    return (
        <Container  w='96vw' maxW='99vw' height='95vh' maxH='95vh' my={5} >
            <Grid
                h='90vh'
                gap={1}
                // bgColor='#FFF'
                borderTopRadius='50'
                borderLeftRadius='50'
                borderRightRadius='50'
                justifyContent='center'
                alignItems='center'
            >
                <Fade in={true} delay={0.3}>
                    <GridItem className="" placeSelf='center' w='30vw' h='fit-content'   bgColor='#fff'borderRadius='30' shadow='dark'>
                        <VStack alignItems='center' spacing={6}  p={8}  >
                            <Heading fontSize='4xl' fontFamily='monospace' fontWeight='semibold'>Login</Heading>
                            <FormControl isInvalid={ !isUserNameValid } >
                                <FormLabel fontWeight='semibold' fontSize='2xl' fontFamily='monospace'>Usuario</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder='Usuario'
                                        p={6} 
                                        shadow='md' 
                                        variant='outline' 
                                        borderRadius='2xl' 
                                        bgColor='white' 
                                        border='1px'  
                                        borderColor='gray.500' 
                                        name="username"
                                        onChange={ ({ target}) => onChange(target.value, 'username') }
                                    />
                                    <InputRightElement pt={2} children={ <BiUserCircle size='25' color="#718096" />} /> 
                                
                                </InputGroup>
                                {   !isUserNameValid && (
                                        <FormErrorMessage>
                                            { formErrors.username }
                                        </FormErrorMessage>
                                    )
                                }
                                
                            </FormControl>
                            <FormControl isInvalid={ !isPasswordValid }>
                                <FormLabel fontWeight='semibold' fontSize='2xl' fontFamily='monospace'>Contraseña</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder='Contraseña' 
                                        p={6} 
                                        shadow='md' 
                                        variant='outline' 
                                        borderRadius='2xl' 
                                        bgColor='white' 
                                        border='1px'  
                                        borderColor='gray.500' 
                                        type="password"
                                        name="password"
                                        onChange={ ({ target}) => onChange(target.value, 'password') }
                                    />
                                    <InputRightElement pt={2} children={ <RiLockPasswordLine size='25' color="#718096" />} /> 
                                </InputGroup>
                                {   !isPasswordValid && (
                                        <FormErrorMessage>
                                            { formErrors.password }
                                        </FormErrorMessage>
                                    )
                                }
                            </FormControl>
                            <Button 
                                size='lg' 
                                w='full' 
                                mt={30}
                                borderRadius='50' 
                                bgColor='#1F1C2F' 
                                _hover={{ bg:'#3b365b'}} 
                                color='white' 
                                onClick={ onLoginClick }
                                isLoading={ isaAuthenticating }
                            >
                                Ingresar
                            </Button>
                        </VStack>
                    </GridItem>
                </Fade>
            </Grid>
        </Container>
    )
}
