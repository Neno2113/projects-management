import { FC } from 'react';
import { VStack, Text } from "@chakra-ui/react"


interface Props {
    number: string | number;
    indicatorText: string;
}


export const ProjectIndicator: FC<Props> = ({ number, indicatorText }) => {
    return (
        <VStack spacing={0} alignItems='flex-start'>
            <Text as='b' fontSize='lg'>{ number }</Text>
            <Text as='b' fontSize='sm' color='gray.500'>{ indicatorText }</Text>
        </VStack>
    )
}
