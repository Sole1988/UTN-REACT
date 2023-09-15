import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider
import './index.css';
import SignUpForm from './componentes/signUpForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <SignUpForm /> {/* Agrega tu componente SignUpForm aquí */}
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// ...

