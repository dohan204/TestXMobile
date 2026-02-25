import { MainApp } from '@/routes/route.app';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContextProvider } from './hooks/useContextUser';

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <SafeAreaProvider>
          <PaperProvider>
            <MainApp />
          </PaperProvider>
        </SafeAreaProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
}
