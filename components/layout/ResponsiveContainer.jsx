import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

export const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
);
