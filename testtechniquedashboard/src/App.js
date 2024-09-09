import React from 'react';
import './App.css';
import DashBoard from './Componants/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Componants/Header';
import './i18next';

function App() {
  return (
    <Provider store={store}>
      <div className="App pt-16">
        <Header />
        <DashBoard />
      </div>
    </Provider>
  );
}

export default App;
