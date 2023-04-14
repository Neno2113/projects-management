import { Container, Grid, ScaleFade,   } from '@chakra-ui/react';

import { MenuComponent, AppBar, ContentContainer } from './layout';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const App = () => {

  let location = useLocation();

  return (
    <ScaleFade
      // key={location.key}
      initialScale={0.9}
      in={true}
      delay={0.3}
    > 
      <Container  w='96vw' maxW='99vw' height='95vh' maxH='95vh' my={5} >
        <Grid
          h='full'
          templateRows='repeat(12, 77px)'
          templateColumns={{  base: 'repeat(12, 1fr)' }}
          gap={1}
          bgColor='#EFF2FA'
          borderTopRadius='50'
          borderLeftRadius='50'
          borderRightRadius='50'
        >
          <AppBar/>
          <MenuComponent />

          <ContentContainer>
            <ScaleFade
              key={location.key}
              initialScale={0.9}
              in={true}
              delay={0.4}
              // style={{ width: '70vw'}}
            > 
              <Outlet />
            </ScaleFade>
          </ContentContainer>


        </Grid>
      </Container>
    </ScaleFade> 
  )
}

export default App
