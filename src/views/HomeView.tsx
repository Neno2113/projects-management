import { HStack, Icon, SimpleGrid, GridItem, Text } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { ProjectCard } from "../components"
import { CardVariant } from "../components/ProjectCard"
import { ProjectIndicator } from "../ui/ProjectIndicator"
import { CommentsSection } from "../layout"

export const HomeView = () => {
    return (
        <>
            <GridItem 
                colSpan={{ sm: 12, md:12, lg: 8}} 
                rowSpan={{ xl: 10, sm: 12}} 
                w={{ sm: '97%', lg: 'full'}}
                bgColor='white' 
                borderRadius='50' 
                p={10} 
                overflowY='auto' 
                justifySelf={{sm: 'center'}}
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
                
            </GridItem>
        
            <CommentsSection />
        </>
    )
}
