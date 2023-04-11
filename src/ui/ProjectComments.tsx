import { FC } from 'react';
import { Flex, Wrap, WrapItem, Avatar, Divider, Text } from "@chakra-ui/react";


interface Props{
    divider?: boolean;
    userName: string;
    userComment: string;
    commentDate: string;
}

export const ProjectComments: FC<Props> = ({ divider, userName, userComment, commentDate }) => {
    return (
        <>
            <Flex justifyContent='space-between' px={5} py={2} _hover={{ cursor: 'pointer', bgColor: 'white', borderRadius:'2xl'}} >
              <Wrap >
                <WrapItem>
                  <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
              </Wrap>
              <Flex w='80%' alignItems='flex-start' flexDirection='column'>
                <Text as='b' fontSize='lg' color='#474343'>{ userName }</Text>
                <Text as='p' fontWeight='semibold' lineHeight={1} color='gray.600'>{ userComment.slice(0, 60) }</Text>
                <Text fontWeight='semibold' fontSize='sm' alignSelf='flex-end' color='gray.400'>{ commentDate }</Text>
              </Flex>
            </Flex>
            {
                divider && 
                (
                    <Divider borderColor='gray.400' borderWidth='thin' />
                )
            }
        </>
    )
}
