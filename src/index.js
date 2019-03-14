import React from 'react';
import ReactDOM from 'react-dom';
import FlashCard from './flashcards/FlashCard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<FlashCard />, document.getElementById('root'));

registerServiceWorker();
