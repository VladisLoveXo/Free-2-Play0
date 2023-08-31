import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	  <Provider store={store}>
		<App />
	  </Provider>
	</React.StrictMode>
  );


reportWebVitals();
