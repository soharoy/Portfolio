import { NavLink } from "react-router-dom";
import "../styles/header.css";

const header = [
	{ displayName: "Home", url: "/" },
	{ displayName: "Portfolio", url: "/portfolio" },
	{ displayName: "Experience", url: "/experience" },
	{ displayName: "Testimonials", url: "/testimonials" },
	{ displayName: "Let's Connect", url: "/connect" },
];
const Header = () => {
	return (
		<div className="header">
			<nav role="navigation">
				<ul>
					{header.map((h, i) => {
						return (
							<li key={i}>
								<NavLink to={h.url} className="nav-link">
									{h.displayName}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
