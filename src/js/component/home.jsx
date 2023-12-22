import React from "react";
import Clock from "../component/Clock";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Clock />
		</div>
	);
};

export default Home;
