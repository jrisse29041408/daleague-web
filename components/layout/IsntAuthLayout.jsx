import { HomepageBody } from "./home/HomepageBody";
import { AppFooter } from "./footer/Footer";
import HomepageNavBar from "./nav/HomepageNavBar";

export const IsntAuthLayout = () => {
	return (
		<div>
			<HomepageNavBar />
			<HomepageBody />
			<AppFooter />
		</div>
	);
};
