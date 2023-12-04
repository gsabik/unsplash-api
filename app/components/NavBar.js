import Link from "next/link";

const LINKS = [
	{
		route: "/",
		label: "Unsplash API"
	},
	{
		route: "/favorites",
		label: "Favorites"
	}
];

const NavBar = () => {
	return (
		<header>
			<nav>
				<ul className="flex flex-row justify-between m-8">
					{
						LINKS.map(({ route, label }) => (
							<Link key={label} href={route}>{label}</Link>
						))
					}
				</ul>
			</nav>
		</header>
	)
}

export default NavBar;