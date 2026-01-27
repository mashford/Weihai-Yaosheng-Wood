import { hydrate } from 'preact';
import App from './App';
import '../index.css';

const container = document.getElementById('root');
if (container) {
  const locale = window.location.pathname.startsWith('/en') ? 'en' : 'zh';
  hydrate(<App locale={locale as 'zh' | 'en'} />, container);
}
