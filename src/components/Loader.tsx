const Loader = () => {
	return (
		<div
			style={{
				display: "flex",
				height: "90vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img src={require("../assets/loader-infinity.gif")} alt="loading" />
		</div>
	);
};

export default Loader;
