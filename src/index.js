import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.component';
import('bootstrap/dist/css/bootstrap.min.css');

import ('./css/index.css');

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <div>
        <App />
    </div>
);