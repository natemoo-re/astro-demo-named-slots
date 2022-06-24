import { useState } from 'preact/hooks';

export default function Sidebar({ children, toggle, title, menu, close }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button id="menu" style={{ '--size': '32px' }} onClick={() => setOpen(!open)}>
				{menu}
			</button>
			<aside class={open ? `open` : ''} onClick={() => setOpen(!open)}>
				<div onClick={(event) => event.stopPropagation()}>
					<header>
						<div>{title}</div>
						<button onClick={() => setOpen(false)}>
							{close}
						</button>
					</header>
					<main>
						{children}
					</main>
					<footer>
						{toggle}
					</footer>
				</div>
			</aside>
		</>
	)
}
