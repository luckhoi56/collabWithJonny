import App from './App.svelte';
import Header from './header.svelte'
const app = new App({
	target: document.body,
	props: {
		name: 'Johnny'
	}
});

export default app;