import { GridItem, Heading, Divider, VStack, Box } from "@chakra-ui/react"
import { ProjectComments } from "../ui"

export const CommentsSection = () => {
    return (
        // <GridItem colSpan={{ sm:12, md: 3}} rowSpan={10} mt={50} display={{ sm: 'none', md:'none', lg: 'block'}}>
            <Box>
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
    //   </GridItem>
    )
}
