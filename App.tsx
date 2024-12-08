import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RoutesContainer} from './routes/RoutesContainer';

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
