import { FC, useRef, useContext } from 'react';
import { Card, CardHeader, CardBody, VStack, Wrap, WrapItem, Avatar, Tag, Button, Text, useToast, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa"
import { TiUserDelete } from "react-icons/ti"
import projectApi from '../api/projectM';
import { AuthContext } from '../auth/context';
import { useUser, useUsers } from '../auth/hooks';

interface Props {
    id: string;
    name: string;
    lastname: string;
    devTitle: string;
    stack?: string[];
}

const imgURL = import.meta.env.VITE_IMGURL;


export const UserCard:FC<Props> = ({ id,  name, lastname, devTitle, stack }) => {
    
    const { users } = useUsers();
    const { userQuery } = useUser( id );
    const { deleteUser } = useContext(AuthContext);
    const toast = useToast();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null);


    const onEditClick = () => {
        return navigate(`/user-register/${id}`);
    }

    const deleteClick = () => {
        deleteUser(id);
        users.refetch();
        onClose();
    }


    const onInputImageClick = () => {
        let imageInput = document.querySelector<HTMLInputElement>("#img-input");
        imageInput?.click();
        
        
        imageInput?.addEventListener("change", async(e) => {
            // console.log(imageInput?.files['0']);
            // console.log(id);
            const formData = new FormData();
        
            formData.append('image', imageInput!.files!['0']);
            formData.append('id', id);

            try {
                const { data } = await projectApi.put('/us/file', formData);
                if( data.code == 200){
                    toast({
                        title: 'Imagen Actualizada.',
                        description: `Imagen actualizada correctamente.`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    users.refetch();
                }
        
            } catch (error: any) {
                console.log(error);
                toast({
                    title: 'Error.',
                    description: 'Ocurrio un error al subir la imagen.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
            
        })
        
    }


    return (
        <>
            <Card variant='outline' borderRadius={40} height="100%" width="90%" size="md" boxShadow='md' bgColor="ThreeDFace">
                <CardHeader>
                
                </CardHeader>
                <CardBody>
                    <VStack>
                        <Wrap _hover={{ cursor: 'pointer' }}>
                            <WrapItem>
                                <input  type="file" hidden id="img-input"  />
                                <Avatar 
                                    onClick={ onInputImageClick } 
                                    size='xl' 
                                    name={ name} 
                                    src={`${imgURL}${id}`} 
                                />
                            </WrapItem>
                        </Wrap>
                        <Text fontSize='2xl' fontWeight='semibold' fontFamily='monospace'>{ name.slice(0,6) } { lastname.slice(0,10)}</Text>
                        <Text fontSize='xs' fontWeight='semibold' fontFamily='monospace' color='gray.500'>{ devTitle }</Text>
                        <Wrap > 
                            {
                                stack?.map((tech) => (
                                    <WrapItem key={tech}>
                                        <Tag variant='solid' colorScheme="cyan">{ tech }</Tag>
                                    </WrapItem>
                                ))
                            }
                        </Wrap>
                        <Wrap pt={7}>
                            <WrapItem>
                                <Button 
                                    size='md' 
                                    rightIcon={ <FaUserEdit /> } 
                                    borderRadius='3xl' 
                                    bgColor='#FBB679'
                                    _hover={{ bg:'#FDCA9C' }} 
                                    color='black' 
                                    onClick={ onEditClick }
                                >
                                        Editar
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button 
                                    size='md' 
                                    leftIcon={ <TiUserDelete /> } 
                                    borderRadius='3xl' 
                                    bgColor='#FB155D' 
                                    _hover={{ bg:'#FB6594'}} 
                                    color='white' 
                                    onClick={ onOpen}
                                >
                                    Eliminar
                                </Button>
                            </WrapItem>
                        </Wrap>
                    </VStack>
                </CardBody>
            </Card>
        
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered

            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Eliminar usuario
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        ¿Estas seguro? No puedes deshacer esta accion.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button 
                        ref={cancelRef} 
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                    <Button colorScheme='red' onClick={deleteClick} ml={3}>
                        Eliminar
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
