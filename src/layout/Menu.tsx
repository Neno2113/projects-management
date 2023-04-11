import { GridItem, VStack, Icon,  HStack, Link } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import { BiHome, BiUserCircle } from 'react-icons/bi'
import { FiMessageSquare } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { MenuItem } from '../ui'
import { useState } from 'react'


export const MenuComponent = () => {

    const [seletedRoute, setSeletedRoute] = useState('')

    return (
        <GridItem colSpan={{ lg: 1, md:12}} rowStart={{ xl:3}} rowEnd={{ xl:11 }}   my={2}>
            <VStack spacing={10} display={{ sm:'none', lg:'flex'}}>
        
                <NavLink to='/'>
                    {({ isActive }) => (
                        <MenuItem icon={ <Icon as={ BiHome } fontSize={30} color={ isActive ? '': 'gray.400'} />} isActive={ isActive }  />
                    )}
                </NavLink>
                <NavLink to='/users'>
                    {({ isActive }) => (
                        <MenuItem icon={ <Icon as={ BiUserCircle } fontSize={30} color={ isActive ? '': 'gray.400'} />} isActive={ isActive }  />
                    )}
                </NavLink>
           
                <MenuItem icon={ <Icon as={ FiMessageSquare } fontSize={30} color='gray.400' /> }  />
                <MenuItem icon={ <Icon as={ IoSettingsOutline } fontSize={30} color='gray.400' /> }  />
            </VStack>
            <HStack spacing={10} display={{ sm:'flex', lg:'none'}} justifyContent='center'>
                <MenuItem icon={ <Icon as={ BiHome } fontSize={30} />}  isActive />
                <MenuItem icon={ <Icon as={ BiUserCircle } fontSize={30} color='gray.400' /> } />
                <MenuItem icon={ <Icon as={ FiMessageSquare } fontSize={30} color='gray.400' /> } />
                <MenuItem icon={ <Icon as={ IoSettingsOutline } fontSize={30} color='gray.400' /> } />
            </HStack>
        </GridItem>
    )
}

