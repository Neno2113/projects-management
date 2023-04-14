import { HStack, Icon, SimpleGrid, GridItem, Text, Flex, Box, Divider, Heading, VStack } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { ProjectCard } from "../components"
import { CardVariant } from "../components/ProjectCard"
import { ProjectIndicator } from "../ui/ProjectIndicator"
import { ProjectComments } from "../ui"

export const HomeView = () => {
    return (
        <Flex 
            // justifyContent=''
            w='85vw'
            h="80vh"
       
        >
            <Box 
                // w="77%"
                w={{ sm: '97%', lg: '90%'}}
                h="full"
                bgColor='white' 
                borderRadius='50' 
                p={7} 
                // m={10}
                overflowY='scroll' 
            >
                <HStack justifyContent='space-between' >
                    <Text as='b' fontSize='3xl'>Projects</Text>
                    <Text as='b' fontSize='xl'>March, 2023</Text>
                </HStack>
                <HStack w='full'>
                    <HStack mt={5} spacing={20} w='80%'>
                    <ProjectIndicator indicatorText='In Progress' number='15' />
                    <ProjectIndicator indicatorText='In Progress' number='45' />
                    <ProjectIndicator indicatorText='Upcoming' number='10' />
                    <ProjectIndicator indicatorText='Total Projects' number='20' />
                    </HStack>
                    <HStack justifyContent='flex-end' w='20%'>
                    <Icon as={ AiOutlineMenu }  fontSize='3xl'/>
                    </HStack>
                </HStack>

                <SimpleGrid columns={{ sm: 1, md: 2, xl: 3}} spacing={5} w={'full'} mt={10} alignItems='center' >
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Unassigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Assigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
                    <GridItem  w='full' >
                    <ProjectCard 
                        projectName={'Emergencia Web'} 
                        projectStatus={'En Desarrollo'} 
                        projectProgressNumber={10} 
                        cardVariant={CardVariant.Unassigned}  
                        projectTimeLeft='4 Days left'             
                    />
                    </GridItem>
            
                
                </SimpleGrid>
            </Box>
            <Box w="28%" mt={19}>
                <Heading textAlign='center' fontWeight='bold' fontSize='3xl' >Cambios</Heading>
                <Divider borderColor='gray.400' borderWidth='thin' my={2} />
                <VStack mt={1} px={2}>
                    <ProjectComments 
                        userName='Anel'
                        userComment={'Est reprehenderit nulla sunt exercitation aute non.'} 
                        commentDate={'april, 1'}
                        divider
                    />
                    <ProjectComments 
                        userName='John'
                        userComment={'Anim dolore pariatur aute quis consectetur nisi commodo anim. Ipsum ea mollit incididunt esse enim incididunt commodo. Proident qui magna voluptate laborum labore non in deserunt quis amet sint aliquip dolor dolore. Incididunt occaecat ea nulla tempor nulla. Magna quis quis est esse. Ullamco consectetur ad est labore elit exercitation ipsum culpa.'} 
                        commentDate={'april, 4'}
                    />
                </VStack>
            
            </Box>
        </Flex>
    )
}
