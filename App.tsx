import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {StackNavigatorComponents} from './src/navigation/StackNavigatorComponents';
import {ThemeContextProvider} from './src/context/ThemeContextProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StackNavigatorComponents />
      </SafeAreaView>
    </ThemeContextProvider>
  );
};

export default App;
