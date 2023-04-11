import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, VStack, Text, FormErrorMessage } from "@chakra-ui/react"
import { useContext } from "react";
import { AuthContext } from "../auth/context";
import { useForm } from "../hooks/useForm";
import validateEmail from "../helpers/validateEmail";
import { IRegisterUser } from "../interfaces/user";
import { useNavigate } from "react-router-dom";
import { devTecnologies } from "../data/dev_tecnologuies";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";



export const SignUpView = () => {
    const { startRegisterUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { value, options, onChange:selectMultiple } = useMultiSelect({
        value: [],
        options: devTecnologies
    })

    const { form, onChange, username, password, name, lastname, role, email, devTitle, stack, isPasswordValid, 
        isUserNameValid, isRoleValid, formErrors, isEmailValid, isLastNameValid, isNameValid,
        isDevTitleValid, isStackValid, formValid, setState } = 
        useForm({ 
            username: '',
            password: '',
            role: '',
            name: '',
            lastname: '',
            email: '',
            devTitle: '',
            stack: [''],
            formErrors: { username: '', password: '', role: '', name: '', lastname: '', email: '', devTitle: '', stack: '' },
            isUserNameValid: true,
            isPasswordValid: true,
            isRoleValid: true,
            isNameValid: true,
            isLastNameValid: true,
            isEmailValid: true,
            isDevTitleValid: true,
            isStackValid: true,

            formValid: false,


         })

    const onRegisterClick = () => {
        if( !validateForm() ) return;
        
        const user: IRegisterUser = {
            email,
            name,
            password,
            lastname,
            role,
            username,
            devTitle,
            stack: value
        }
        
        startRegisterUser( user, () => {
            navigate('/users');
        });   
        
    }

    //Validacion de formulario en base al state creado arriba
    const validateForm = () => {
        //Valida que el username no este vacio
        if(username.trim().length === 0){
            setState({
                ...form,
                isUserNameValid: false,
                formErrors: { ...formErrors, username: 'Usuario es requerido.'},
                formValid: false
            })
            return false;
            
        }
        if(password.trim().length === 0 || password.length < 6 ){
            setState({
                ...form,
                isPasswordValid: false,
                formErrors: { ...formErrors, password: 'La contraseña debe tener mas de 6 caracteres'},
                formValid: false
            })
            return false;
        }
        if(name.trim().length === 0){
            setState({
                ...form,
                isNameValid: false,
                formErrors: { ...formErrors, name: 'Nombre es requerido.'},
                formValid: false
            })
            return false;
            
        }
        if(lastname.trim().length === 0){
            setState({
                ...form,
                isLastNameValid: false,
                formErrors: { ...formErrors, lastname: 'Apellido es requerido.'},
                formValid: false
            })
            return false;
        }
        if(role.trim().length === 0){
            setState({
                ...form,
                isRoleValid: false,
                formErrors: { ...formErrors, role: 'Role es requerido.'},
                formValid: false
            })
            return false;
        }
        if(!validateEmail(email)){
            setState({
                ...form,
                isEmailValid: false,
                formErrors: { ...formErrors, email: 'Debe digitar un correo valido.'},
                formValid: false
            })
            return false;
        }
        if(devTitle.trim().length === 0){
            setState({
                ...form,
                isDevTitleValid: false,
                formErrors: { ...formErrors, devTitle: 'Debe digitar el titulo del usuario.'},
                formValid: false
            })
            return false;
        }
        if(value!.length === 0){
            setState({
                ...form,
                isStackValid: false,
                formErrors: { ...formErrors, stack: 'Debe seleccionar una tecnlogia.'},
                formValid: false
            })
            return false;
        }
       
       
        setState({
            ...form,
            isPasswordValid: true,
            isUserNameValid: true,
            isEmailValid: true,
            isLastNameValid: true,
            isNameValid: true,
            isRoleValid: true,
            isDevTitleValid: true,
            isStackValid: true,
            formValid: true,

        })
        return true;
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

    <VStack w="full" h="full" p={10} spacing={1} alignItems="flex-start">
        <VStack spacing={3} alignItems='flex-start'>
            <Heading size="2xl">Creacion Usuario</Heading>
            <Text>Registro de nuevo usuario</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
            <GridItem colSpan={2}>
                <FormControl isInvalid={ !isUserNameValid }>
                    <FormLabel>Usuario</FormLabel>
                    <Input 
                        placeholder='Usuario'
                        variant='outline' 
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
                        Registarse
                    </Button>
            </GridItem>
        </SimpleGrid>
    </VStack>

    </GridItem>
  )
}
