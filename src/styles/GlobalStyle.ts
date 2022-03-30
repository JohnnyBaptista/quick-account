import { Theme } from '@chakra-ui/react'
import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  theme: Theme
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.purple[900]};
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: {${(props) => props.theme.colors.gray[50]}};
  }
`
