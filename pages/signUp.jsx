import { useForm } from '../hooks/useForm';
import { Form, Input, Button } from "semantic-ui-react";

export default function SignUpForm() {
  const [data, handleChange] = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <Form>
      <Form.Field required>
        <Input
        focus
        type="text"
        placeholder="Username"
        onChange={handleChange}
        value={data.username}
        />
      </Form.Field>
      <Form.Field required>
        <Input
        focus
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={data.email}
        />
      </Form.Field>
      <Form.Field required>
        <Input
        focus
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
        />
      </Form.Field>
      <Form.Field required>
        <Input
        focus
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={data.confirmPassword}
        />
      </Form.Field>
      <Button
      type="submit"
      onClick={() => console.log(data)}
      >Submit</Button>
    </Form>
  );
}