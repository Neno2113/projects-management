import { useState } from "react";
import { Box, VStack, Heading, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, FormErrorMessage, Button } from "@chakra-ui/react"
import { MultiSelect, useMultiSelect } from "chakra-multiselect"
import { useStatus } from "../hooks";
import ReactQuill, {} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { upperCaseFirstLetter } from "../../helpers";

export const ProjectsFormView = () => {

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            // ['link', 'image'],
            ['clean'],
            ['task-list'],
        ],
        // 'task-list': true
        // 'task-list': true
    }

    const [ text, setText] = useState('')
    // const { statusQuery } = useStatus();
    const { value, options, onChange:selectMultiple } = useMultiSelect({
        value: [] ,
        options: []
    });


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
                        <Heading size="lg" fontFamily="mono">Crear Proyecto</Heading>
                    </VStack>
                    <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
                        <GridItem colSpan={2} >
                            <FormControl>
                                <FormLabel>Titulo</FormLabel>
                                <Input 
                                    placeholder='Titulo del proyecto'
                                    variant='outline' 
                                    // value={ form.username}
                                    border='1px' 
                                    borderColor='gray.500'
                                    name="username"
                                    // onChange={ ({ target }) => onChange( target.value, 'username')} 
                                    autoComplete="off"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1} >
                            <FormControl >
                                <FormLabel>Tipo</FormLabel>
                                <Select 
                                    variant='outline' 
                                    border='1px' 
                                    borderColor='gray.500'
                                    name="role"
                                    // onChange={ ({ target }) => onChange(target.value, 'role') }
                                >
                                    <option value='admin' >Administrador</option>
                                    <option value='developer'>Desarrollador</option>
                                    <option value='quality'>QA</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1} >
                            <FormControl >
                                <FormLabel>Departamento</FormLabel>
                                <Select 
                                    variant='outline' 
                                    border='1px' 
                                    borderColor='gray.500'
                                    name="role"
                                    // onChange={ ({ target }) => onChange(target.value, 'role') }
                                >
                                    <option value='admin' >Administrador</option>
                                    <option value='developer'>Desarrollador</option>
                                    <option value='quality'>QA</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1} >
                            <FormControl>
                                <FormLabel>Fecha de entrega</FormLabel>
                                <Input 
                                    // placeholder=''
                                    type="date"
                                    variant='outline' 
                                    // value={ form.username}
                                    border='1px' 
                                    borderColor='gray.500'
                                    name="username"
                                    // onChange={ ({ target }) => onChange( target.value, 'username')} 
                                    autoComplete="off"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1} >
                            <FormControl>
                                <FormLabel>Estatus</FormLabel>
                                <Select 
                                    variant='outline' 
                                    border='1px' 
                                    borderColor='gray.500'
                                    name="role"
                                    // onChange={ ({ target }) => onChange(target.value, 'role') }
                                >
                                    {/* {
                                        statusQuery.data?.map( status => (
                                            <option key={status._id} value={status._id} >{ upperCaseFirstLetter( status.description) }</option>
                                        ))
                                    } */}
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <MultiSelect
                                    options={options}
                                    value={value}
                                    label='Tecnologias'
                                    onChange={ selectMultiple! }
                                    create
                                    style={{ borderColor: 'gray.500'}}
                                    // border='1px' 
                                    borderColor='gray.500'
                                />

                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2} height={350}>
                            <Box h="full">
                                <ReactQuill 
                                    theme="snow" 
                                    style={{ height: '90%' }}
                                    modules={ modules }
                                    value={text} 
                                    onChange={setText} 
                                />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={2} >
                            <Button 
                                size='lg'
                                w='full' 
                                bgColor='#1F1C2F' 
                                _hover={{ bg:'#3b365b'   }} 
                                color='white' 
                                // onClick={ onRegisterClick }
                            >
                                Crear Proyecto
                            </Button>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
            </Box>
        </>
    )
}
