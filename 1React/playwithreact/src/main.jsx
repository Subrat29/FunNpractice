import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App2 />
    {/* <App /> */}
  </ChakraProvider>,
)
