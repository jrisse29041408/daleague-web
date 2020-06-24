import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { registerMutation } from "../graphql/mutations/register";

export const RegisterForm = () => {
	const [registerUser, { loading, error }] = useMutation(registerMutation);
	if (loading) return <p>...Loading</p>;
	if (error) return <p>${error}</p>;

	return (
		<Formik
			initialValues={{ username: "", email: "", password: "" }}
			onSubmit={values => registerUser({ variables: { input: { ...values } } })}
		>
			{({ values, handleChange, submitForm }) => (
				<form>
					<input
						type="text"
						onChange={handleChange}
						value={values.username}
						placeholder="Username"
						name="username"
					/>
					<input
						type="email"
						onChange={handleChange}
						value={values.email}
						placeholder="Email"
						name="email"
					/>
					<input
						type="text"
						onChange={handleChange}
						value={values.password}
						placeholder="Password"
						name="password"
					/>
					<button type="submit" onClick={submitForm}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
};
