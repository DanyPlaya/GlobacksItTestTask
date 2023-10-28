import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/routeProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/shared/lib/queryClient";
export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
