import { render as renderToString } from 'preact-render-to-string';
import App from './App';
import { zh } from './i18n/locales/zh';
import { en } from './i18n/locales/en';

export async function render(locale: 'zh' | 'en') {
  const html = renderToString(<App locale={locale} />);
  return { html };
}

export { zh, en };
