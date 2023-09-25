import './app.css';
import App from './App.svelte';

const root = document.getElementById('app');

if (root === null) {
  throw new Error('Root element not found');
}

const app = new App({
  target: root,
});

export default app;
