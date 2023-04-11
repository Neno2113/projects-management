import { Container, GridItem, Grid,   } from '@chakra-ui/react';

import { MenuComponent, AppBar, CommentsSection } from './layout';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <Container  w='96vw' maxW='99vw' height='98vh' maxH='98vh' my={5} >
      <Grid
        h='full'
        templateRows='repeat(12, 1fr)'
        templateColumns={{  base: 'repeat(12, 1fr)' }}
        // templateColumns='repeat(12, 1fr)'
        gap={1}
        bgColor='#EFF2FA'
        borderTopRadius='50'
        borderLeftRadius='50'
        borderRightRadius='50'
      >
        <AppBar/>
        <MenuComponent />

        <Outlet />
        {/* <HomeView /> */}
        {/* <SignUpView /> */}

      </Grid>
    </Container>
  )
}

export default App
