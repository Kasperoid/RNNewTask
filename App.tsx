import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RoutesContainer} from './routes/RoutesContainer';
import {SheetProvider} from 'react-native-sheet-transitions';

function App() {
  return (
    <SheetProvider>
      <GestureHandlerRootView>
        <Provider store={store}>
          <RoutesContainer />
        </Provider>
      </GestureHandlerRootView>
    </SheetProvider>
  );
}

export default App;
