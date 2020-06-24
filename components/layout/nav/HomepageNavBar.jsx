import { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

class HomepageNavBar extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { fixed } = this.state;

		return (
			<Menu
				fixed={fixed ? "top" : null}
				inverted={!fixed}
				pointing={!fixed}
				secondary={!fixed}
				size="large"
			>
				<Container>
					<a href="/">
						<Menu.Item active>Home</Menu.Item>
					</a>
					<a href="/about">
						<Menu.Item>About</Menu.Item>
					</a>
					<a href="/contact">
						<Menu.Item>Contact Us</Menu.Item>
					</a>
					<Menu.Item position="right">
						<a href="/user/signin">
							<Button inverted={!fixed}>Sign in</Button>
						</a>
						<a href="/user/signup">
							<Button
								inverted={!fixed}
								primary={fixed}
								style={{ marginLeft: "0.5em" }}
							>
								Sign Up
							</Button>
						</a>
					</Menu.Item>
				</Container>
			</Menu>
		);
	}
}

export default HomepageNavBar;
