import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from '@chakra-ui/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ChakraProvider>
  )
}