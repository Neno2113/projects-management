import { FC, useState } from 'react';
import { VStack, Text, Tag, TagRightIcon } from "@chakra-ui/react"
import { IconType } from 'react-icons/lib';


interface Props {
    number: string | number;
    indicatorText: string;
    color: "twitter" | "cyan" | "facebook" | "teal" | "whatsapp";
    icon: IconType;
}


export const ProjectIndicator: FC<Props> = ({ number, indicatorText, color, icon }) => {

    const [toggleTag, setToggleTag] = useState<boolean>(false);

    const onToggleTag = () => {
        setToggleTag(!toggleTag);
    }

    return (
        <VStack spacing={0} alignItems='flex-start'>
            <Tag 
                size='md' 
                variant={ toggleTag ? "solid" : "outline"} 
                colorScheme={ toggleTag ? color : "gray"} 
                shadow="sm"
                _hover={{ cursor: 'pointer' }} 
                py={2} 
                px={3} 
                border='1px'
                borderRadius={15}
                onClick={ onToggleTag }
            >
                <Text as='b' fontSize='lg' mr={1}>{ number }</Text>
                <Text fontSize='sm' >{ indicatorText }</Text>
                <TagRightIcon as={ icon } fontSize={20}/>
            </Tag>
        </VStack>
    )
}
