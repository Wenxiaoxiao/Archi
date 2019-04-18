import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import MyPCRouter from './Page/Router';


ReactDOM.render(<MyPCRouter ></MyPCRouter>,document.getElementById('root'));

serviceWorker.unregister();
