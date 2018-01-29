import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import UIKit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

require('uikit/dist/css/uikit.min.css');


UIKit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
