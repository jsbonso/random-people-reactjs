import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles.scss';
// Used for Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
