import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../theme";

const queryClient = new QueryClient();

function AppComponent({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default AppComponent;
