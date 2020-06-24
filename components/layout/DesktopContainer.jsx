import React, { Component } from "react";
import {
	Button,
	Container,
	Menu,
	Responsive,
	Segment,
	Visibility,
} from "semantic-ui-react";
import { getWidth } from "../../utils/getWidth";
import HomepageNavBar from "./nav/HomepageNavBar";
import { HomepageBody } from "./home/HomepageBody";

class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 700, padding: "1em 0em" }}
						vertical
					>
						<HomepageNavBar />
						<HomepageBody />
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

export default DesktopContainer;
