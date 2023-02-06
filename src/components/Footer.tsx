import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import medium from "../assets/medium.png";
import "../styles/footer.css";

const footer = [
	{
		src: instagram,
		alt: "instagram",
		url: "https://www.instagram.com/sohaa.struck",
	},
	{
		src: email,
		alt: "email",
		url: "mailto:anapeksha.mukherjee@gmail.com",
	},
	{
		src: medium,
		alt: "medium",
		url: "https://medium.com/@soumiliroy",
	},
	{
		src: linkedin,
		alt: "linkedin",
		url: "https://www.linkedin.com/in/soumili-roy-848063190",
	},
];

const Footer = () => {
	return (
		<div className="footer">
			{footer.map((f, i) => {
				return (
					<img
						key={i}
						src={f.src}
						alt={f.alt}
						onClick={() => window.open(f.url)}
					/>
				);
			})}
		</div>
	);
};

export default Footer;
