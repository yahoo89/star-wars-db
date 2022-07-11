import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

//https://github.com/Juriy/pro-react-redux/tree/master/star-db/100-higher-order-components/src/components
//https://swapi.dev/