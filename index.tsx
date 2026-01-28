import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log(
  "%c🚀 BBK КЕМЕРОВО: ОБНОВЛЕНИЕ ПРИМЕНЕНО %c\nСтатус: Графики Recharts удалены, Карта добавлена.\nДата: " + new Date().toLocaleString(),
  "background: #FF4D00; color: white; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;",
  "color: #888;"
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);