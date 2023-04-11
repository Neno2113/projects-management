import { Card, CardHeader, CardBody, VStack, Wrap, WrapItem, Avatar, Tag, Button, Text, Input } from "@chakra-ui/react"
import { FaUserEdit } from "react-icons/fa"
import { TiUserDelete } from "react-icons/ti"


//TODO: Receive Props

export const UserCard = () => {

    const onInputImageClick = () => {
        let inputImage = document.querySelector<HTMLInputElement>("#img-input")?.click();
    }


    return (
        <Card variant='outline' borderRadius={40} boxShadow='md' bgColor="ThreeDFace">
            <CardHeader>
            
            </CardHeader>
            <CardBody>
                <VStack>
                    <Wrap _hover={{ cursor: 'pointer' }}>
                        <WrapItem>
                            <Input  type="file" hidden id="img-input" />
                            <Avatar onClick={ onInputImageClick } size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </WrapItem>
                    </Wrap>
                    <Text fontSize='2xl' fontWeight='semibold' fontFamily='monospace'>Anel Dominguez</Text>
                    <Text fontSize='xs' fontWeight='semibold' fontFamily='monospace' color='gray.500'>Web Developer</Text>
                    <Wrap > 
                        <WrapItem >
                            <Tag variant='solid' colorScheme="cyan">React</Tag>
                        </WrapItem>
                        <WrapItem>
                            <Tag variant='solid' colorScheme="cyan">NodeJS</Tag>
                        </WrapItem>
                        <WrapItem>
                            <Tag variant='solid' colorScheme="cyan">Flutter</Tag>
                        </WrapItem>
                
                    </Wrap>
                    <Wrap pt={7}>
                        <WrapItem>
                            <Button size='md' rightIcon={ <FaUserEdit /> } borderRadius='3xl' bgColor='#FBB679' _hover={{ bg:'#FDCA9C'   }} color='black' >Editar</Button>
                        </WrapItem>
                        <WrapItem>
                            <Button size='md' leftIcon={ <TiUserDelete /> } borderRadius='3xl' bgColor='#FB155D' _hover={{ bg:'#FB6594'   }} color='white' >Eliminar</Button>
                        </WrapItem>
                    </Wrap>
                </VStack>
            </CardBody>
        </Card>
    )
}
