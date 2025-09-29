import InputField from '../components/InputField';
import Button from '../components/Button';

export default function SignUpForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <InputField  placeholder="Entrez votre nom" />
      <InputField  type="email" placeholder="Entrez votre email" />
      <InputField  type="password" placeholder="Créez un mot de passe" />
      <Button label="S'inscrire" variant="primary" />
    </form>
  );
}