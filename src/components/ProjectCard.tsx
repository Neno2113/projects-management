import { FC , useEffect, useState} from "react"
import { Card, CardHeader, HStack, Menu, Text, MenuButton, 
    IconButton, CardBody, Flex, Progress, CardFooter, AvatarGroup, Avatar, Center, Tag, TagLabel } from "@chakra-ui/react"
import { HiDotsVertical } from "react-icons/hi"

export enum CardVariant {
    Unassigned = '#BCC1D8',
    Assigned = '#FDCA9C',
    Done = '#75DDA7',
    All = '#FFF'
}

interface Props {
    projectDate?:  string;
    projectName:   string;
    projectStatus: string; 
    projectProgressNumber: number;
    projectTimeLeft?: string;
    cardVariant?: CardVariant
}

export const ProjectCard:FC<Props> = ({ 
    projectDate = 'april 4, 2023', 
    projectName, 
    projectStatus,  
    projectProgressNumber,
    projectTimeLeft,
    cardVariant,
    }) => {

        const [colorSelected, setColorSelected] = useState(''); 

        useEffect(() => {
            validateColor();
        }, [ cardVariant ])
        
    
        const validateColor = () => {
            switch ( cardVariant) {
                case CardVariant.Assigned:
                    return setColorSelected('orange');
                case CardVariant.Done:
                    return setColorSelected('green');
            
                default:
                    return setColorSelected('');
            }
        }

        return (
            <Card borderRadius={40} h={280} w={320} boxShadow='md' variant='outline' bgColor={cardVariant}>
                <CardHeader>
                <HStack justifyContent='space-between' >
                    <Text as='b' color='gray.700' fontSize='md' fontWeight='medium'>{ projectDate }</Text>
                    <Menu>
                    <MenuButton 
                        as={IconButton}
                        ria-label='Options'
                        icon={<HiDotsVertical />}
                        variant='ghost'
                    />
                    </Menu>
                </HStack>
                </CardHeader>
                <CardBody>
                <Flex flexDirection='column' alignItems='center' w='full'>
                    <Text as='b'>
                        { projectName }
                    </Text>
                    <Text >
                        { projectStatus }
                    </Text>
                </Flex>
                <Text as='b' textAlign='start'>
                    Progress
                </Text>
                <Progress 
                    borderRadius='2xl' 
                    value={projectProgressNumber}
                    colorScheme={ colorSelected } 
                />
                <HStack justifyContent='flex-end'>
                    <Text as='b'>
                        {projectProgressNumber.toString()}%
                    </Text>
                </HStack>
                </CardBody>
                <CardFooter display='flex' justifyContent='space-between' borderTop='1px' borderColor='gray.300' w='full' h='45%' py={0}>
                    {/* //TODO: Recibir arreglo de jsx con imagenes de usuarios */}
                    <AvatarGroup size='sm' max={2} mt={0} pt={0}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                    <Center>
                        <Tag
                            colorScheme={colorSelected}
                            borderRadius='2xl'
                            py={2}
                            px={3}
                        >
                            <TagLabel
                                as='b'
                            >
                                { projectTimeLeft }
                            </TagLabel>
                        </Tag>
                    </Center>
                </CardFooter>
        </Card>
        )
}
