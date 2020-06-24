import { gql } from "apollo-boost";

export const registerMutation = gql`
	mutation RegisterMutation($input: RegisterInput!) {
		register(input: $input) {
			username
			email
		}
	}
`;
