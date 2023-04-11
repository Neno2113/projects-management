import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'
import './styles.css';
import { AuthProvider } from './auth/context/AuthProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme } >
      <AuthProvider>
        <RouterProvider router={ router } />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
