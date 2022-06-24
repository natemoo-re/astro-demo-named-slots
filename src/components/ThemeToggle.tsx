import { useEffect, useState } from 'preact/hooks';

export default function ThemeToggle({ light, dark }) {
	const [mode, setMode] = useState('light');
	useEffect(() => {
		document.documentElement.style.setProperty('color-scheme', mode)
	}, [mode])

	return (
		<div class="theme">
			<button style={{ '--size': '32px' }} onClick={() => setMode(m => m === 'light' ? 'dark' : 'light')}>
				{mode === 'light' ? light : dark}
			</button>
			Theme
		</div>
	)
}
