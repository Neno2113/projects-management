import { Heading, VStack, Spinner, Box } from '@chakra-ui/react';

export const LoadingUsersPage = () => {
    return (
        <Box 
            // w='90%'
            height='80vh'
            bgColor='white' 
            borderRadius='50' 
            p={5}
            overflowY='scroll'
        >
            <VStack>
                <Heading fontFamily='monospace' color=''>Loading...</Heading>
                <Spinner size='lg'  />
            </VStack>
        </Box >
    )
}
