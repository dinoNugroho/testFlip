/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import AppNavigator from "./src/navigations/RootNavigator/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorProvider } from "./AppErrorContext";
import GlobalErrorComponent from "./src/features/component/GlobalErrorComponent";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorProvider>
        <NavigationContainer>
          <AppNavigator />
          <GlobalErrorComponent />
        </NavigationContainer>
      </ErrorProvider>
    </QueryClientProvider>
  )
}

export default App;
