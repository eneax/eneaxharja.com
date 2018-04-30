import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './libs/fontawesome/fontawesome-all.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
