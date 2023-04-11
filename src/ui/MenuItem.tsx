import { FC } from "react";
import { Center, IconButton } from "@chakra-ui/react"


interface Props {
    icon: JSX.Element;
    iconSize?: string | number;
    isActive?: boolean;

}

export const MenuItem:FC<Props> = ({ icon, isActive = false,  }) => {
    return (
        <>
            <Center>
                <IconButton 
                    // bgColor='#1F1C2F'
                    bgColor={ isActive ? '#1F1C2F' : '' }
                    ringColor='red'
                    aria-label='Menu' 
                    icon={ icon }
                    borderRadius='full'
                    color='white'
                    boxSize='51'
                    _hover={{ bg: isActive ? '#3b365b' : ''  }}
                />
            </Center>
        </>
    )
}
