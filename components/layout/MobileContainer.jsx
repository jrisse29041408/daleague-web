import React, { Component } from "react";
import {
	Button,
	Container,
	Icon,
	Menu,
	Responsive,
	Segment,
	Sidebar,
} from "semantic-ui-react";
import { getWidth } from "../../utils/getWidth";
import { HomepageBody } from "./home/HomepageBody";

class MobileContainer extends Component {
	state = {};

	handleSidebarHide = () => this.setState({ sidebarOpened: false });

	handleToggle = () => this.setState({ sidebarOpened: true });

	render() {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation="push"
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item>Home</Menu.Item>
					<a href="/about">
						<Menu.Item>About</Menu.Item>
					</a>
					<a href="/contact">
						<Menu.Item>Contact Us</Menu.Item>
					</a>
					<a href="/user/signin">
						<Menu.Item>Sign in</Menu.Item>
					</a>
					<a href="/user/signup">
						<Menu.Item>Sign Up</Menu.Item>
					</a>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 350, padding: "1em 0em" }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size="large">
								<Menu.Item onClick={this.handleToggle}>
									<Icon name="sidebar" />
								</Menu.Item>
								<Menu.Item position="right">
									<Button as="a" inverted>
										Log in
									</Button>
									<Button as="a" inverted style={{ marginLeft: "0.5em" }}>
										Sign Up
									</Button>
								</Menu.Item>
							</Menu>
						</Container>
						<HomepageBody mobile />
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Responsive>
		);
	}
}

export default MobileContainer;
