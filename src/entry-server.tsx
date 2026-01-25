import { render as renderToString } from 'preact-render-to-string';
import App from './App';

export function render() {
  const html = renderToString(<App />);
  return { html };
}
