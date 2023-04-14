import { Container, Grid, Heading, VStack, Spinner } from '@chakra-ui/react';

export const LoadingPage = () => {
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
                <VStack>
                    <Heading fontFamily='monospace' color=''>Loading...</Heading>
                    <Spinner size='lg'  />
                </VStack>
            </Grid>
        </Container >
    )
}
