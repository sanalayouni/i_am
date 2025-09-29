import SignUpForm from '../forms/SignUpForm';
import AuthFooterLink from '../components/AuthFooterLink';
import logo from '../assets/i_am_logo.png';
import img from '../assets/signup.png';

function SignUpPage() {
  return (
    <>
    
    <div className="min-h-screen flex">
      {/* Left side: illustration */}
      <div className="w-1/2  flex items-center justify-center">
        <img src={img} alt="signup illustration" className="w-150 h-130" />
      </div>

      {/* Right side: form */}
      <div className="w-1/2 flex flex-col justify-center px-12  text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="i am logo" className="w-45 h-45" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-17">Créer un compte</h2>

        {/* Form */}
        <SignUpForm />



        {/* Footer link */}
        <div className="mt-10">
          <AuthFooterLink
            text="Déja inscrit?"
            linkText="Connectez-vous "
            to="/login"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUpPage;
