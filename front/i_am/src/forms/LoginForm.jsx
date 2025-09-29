import InputField from '../components/InputField';
import Button from '../components/button';

export default function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <InputField  type="email" placeholder="Entrez votre email" />
      <InputField  type="password" placeholder="Entrez votre mot de passe" />
      <Button label="Se connecter" variant="primary" />
    </form>
  );
}