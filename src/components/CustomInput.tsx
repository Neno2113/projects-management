import { InputGroup, InputLeftElement, Input, FormLabel } from "@chakra-ui/react"
import { FC } from "react";
import { CiSearch } from "react-icons/ci"


interface Props {
    placeHolderText?: string;
    icon?: JSX.Element;


}


export const CustomInput:FC<Props> = ({ placeHolderText, icon }) => {


    return (
        <>
            <FormLabel>Apellido</FormLabel>
            <InputGroup w={{ sm: '80%', xl:'40%'}}>
                {
                    icon && 
                    (
                        <InputLeftElement 
                            children={ icon }
                        />
                    )
                }
            
                <Input 
                    placeholder={ placeHolderText } 
                    variant='outline' 
                    borderRadius='3xl' 
                    border='1px' 
                    borderColor='gray.500'
                    bgColor='white'
                />
            </InputGroup>
        </>
    )
}
