import { hydrate } from 'preact';
import App from './App';
import '../index.css';

const container = document.getElementById('root');
if (container) {
  hydrate(<App />, container);
}
