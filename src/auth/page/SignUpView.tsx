import { Button, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, VStack, Box, FormErrorMessage } from "@chakra-ui/react"
import { MultiSelect } from "chakra-multiselect";
import { useRegister } from "../hooks/useRegister";
import { useParams } from "react-router-dom";
import { LoadingUsersPage } from "./LoadingUsersPage";


export const SignUpView = () => {

    const { id } = useParams();

    const { 
        isUserNameValid,
        onChange,
        formErrors,
        isPasswordValid,
        isNameValid,
        isLastNameValid,
        isEmailValid,
        isRoleValid,
        isDevTitleValid,
        options,
        value,
        selectMultiple,
        isStackValid,
        onRegisterClick,
        form
    } = useRegister( id );

    // if( userQuery.isFetching){
    //     return <LoadingUsersPage />
    // }

    return (
        <>
            <Box 
                // w='90%'
                // height='100%'
                bgColor='white' 
                borderRadius='50' 
                p={5}
                overflowY='scroll'
            >
            <VStack w="full" h="full" pb={0} px={10}  spacing={3} alignItems="flex-start">
                <VStack spacing={0} alignItems='flex-start'>
                    <Heading size="xl">{ (id) ? "Actualizar Usuario" : "Crear Usuario"}</Heading>
                </VStack>
                <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={ !isUserNameValid }>
                            <FormLabel>Usuario</FormLabel>
                            <Input 
                                placeholder='Usuario'
                                variant='outline' 
                                value={ form.username}
                                border='1px' 
                                borderColor='gray.500'
                                name="username"
                                onChange={ ({ target }) => onChange( target.value, 'username')} 
                                autoComplete="off"
                            />
                            {  !isUserNameValid && (
                                    <FormErrorMessage>
                                        { formErrors.username }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={ !isPasswordValid }>
                            <FormLabel>Contraseña</FormLabel>
                            <Input 
                                placeholder='**********' 
                                variant='outline' 
                                value={form.password}
                                type='password' 
                                border='1px'  
                                borderColor='gray.500' 
                                name="password"
                                onChange={ ({ target }) => onChange( target.value, 'password')} 
                            />
                            {  !isPasswordValid && (
                                    <FormErrorMessage>
                                        { formErrors.password }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isInvalid={ !isNameValid }>
                            <FormLabel>Nombre</FormLabel>
                            <Input 
                                placeholder='John' 
                                variant='outline' 
                                value={form.name}
                                border='1px'  
                                borderColor='gray.500' 
                                name="name"
                                onChange={ ({ target }) => onChange( target.value, 'name')} 
                            />
                            {  !isNameValid && (
                                    <FormErrorMessage>
                                        { formErrors.name }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isInvalid={ !isLastNameValid }>
                            <FormLabel>Apellido</FormLabel>
                            <Input 
                                placeholder='Doe' 
                                variant='outline' 
                                value={form.lastname}
                                border='1px'  
                                borderColor='gray.500' 
                                name="lastname"
                                onChange={ ({ target }) => onChange( target.value, 'lastname')} 
                            />
                            {  !isLastNameValid && (
                                    <FormErrorMessage>
                                        { formErrors.lastname }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isInvalid={ !isEmailValid }>
                            <FormLabel>Correo</FormLabel>
                            <Input 
                                placeholder='tunombre@arsfuturo.com.do' 
                                type='email' 
                                variant='outline' 
                                value={form.email}
                                border='1px'  
                                borderColor='gray.500' 
                                name="email"
                                onChange={ ({ target }) => onChange( target.value, 'email')} 
                            />
                            {  !isEmailValid && (
                                    <FormErrorMessage>
                                        { formErrors.email }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl isInvalid={ !isRoleValid }>
                            <FormLabel>Roles</FormLabel>
                            <Select 
                                variant='outline' 
                                border='1px' 
                                borderColor='gray.500'
                                name="role"
                                onChange={ ({ target }) => onChange(target.value, 'role') }
                            >
                                <option value='admin' >Administrador</option>
                                <option value='developer'>Desarrollador</option>
                                <option value='quality'>QA</option>
                            </Select>
                            {  !isRoleValid && (
                                    <FormErrorMessage>
                                        { formErrors.role }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl isInvalid={ !isDevTitleValid }>
                            <FormLabel>Titulo</FormLabel>
                            <Input 
                                placeholder='Web Developer' 
                                variant='outline' 
                                value={form.devTitle}
                                border='1px'  
                                borderColor='gray.500' 
                                name="devTitle"
                                onChange={ ({ target }) => onChange( target.value, 'devTitle')} 
                            />
                            {  !isDevTitleValid && (
                                    <FormErrorMessage>
                                        { formErrors.devTitle }
                                    </FormErrorMessage>
                                )
                            }
                        </FormControl>
                    </GridItem>
                    
                    <GridItem colSpan={2}>
                        <FormControl>
                            <MultiSelect
                                options={options}
                                value={value}
                                label='Tecnologias'
                                onChange={ selectMultiple!}
                                create
                                style={{ borderColor: 'gray.500'}}
                                // border='1px' 
                                borderColor='gray.500'
                            />
                            {  !isStackValid && (
                                        <FormErrorMessage>
                                            { formErrors.stack }
                                        </FormErrorMessage>
                                    )
                                }

                        </FormControl>
                    </GridItem>
            
                    <GridItem colSpan={2} >
                        <Button 
                            size='lg'
                            w='full' 
                            bgColor='#1F1C2F' 
                            _hover={{ bg:'#3b365b'   }} 
                            color='white' 
                            onClick={ onRegisterClick }
                        >
                           { (id) ? "Actualizar": "Registrar"}
                        </Button>
                    </GridItem>
                </SimpleGrid>
            </VStack>
            </Box>
        </>
    )
}
