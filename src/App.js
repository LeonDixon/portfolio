import theme from './theme'
import { ChakraProvider } from "@chakra-ui/react";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <>
        <Portfolio />
      </>
    </ChakraProvider>
  );
}

export default App;
