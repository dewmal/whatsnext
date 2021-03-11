import { Link } from 'preact-router/match';
const Header = () => (
	<header>
		<h1>Preact App</h1>
		<nav>
			<Link href="/">Home</Link>
			<Link href="/profile">Me</Link>
			<Link href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
