import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './config/theme';
import UI from './components/UI';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" m="3rem auto" p={5} maxW={700}>
    <Box textAlign="center" fontWeight='bold' mb={10} h={{ base: '40px', md: '50px', lg: '70px' }} fontSize={{ base: '20px', md: '30px', lg: '35px' }} color='#F5A623' >
      <h1>Short Link Generator</h1>
    </Box>
      <UI/>
    </Box>
    </ChakraProvider>
  );
}

export default App;
