import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'
import './styles.css';
import { AuthProvider } from './auth/context/AuthProvider'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme } >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ReactQueryDevtools />
          <RouterProvider router={ router } />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
