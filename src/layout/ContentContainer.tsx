import { FC } from 'react';
import { GridItem } from '@chakra-ui/react';


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const ContentContainer:FC<Props> = ({ children }) => {
    return (
        <GridItem
            colSpan={{ sm: 12, md:12, lg: 11}} 
            rowSpan={{ xl: 10, sm: 12}} 
            w={{ sm: '97%', lg: 'full'}}
            h={{ sm: '100%', lg: 'full'}}
            maxHeight='100%'
            
            // bgColor='white' 
            borderRadius='50' 
            // p={10}
            pr={10} 
            pt={3}
            overflowY='scroll' 
            justifySelf={{sm: 'center', md: 'center'}}
            justifyContent='space-between'
        >
            { children }
        </GridItem>
    )
}
