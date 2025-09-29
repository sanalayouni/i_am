import { Link } from 'react-router-dom';

export default function AuthFooterLink({ text, linkText, to }) {
  return (
    <p className="text-sm text-gray-600 mt-4 text-center text-white">
      {text}{' '}
      <Link to={to} className="text-blue-600 hover:underline font-medium">
        {linkText}
      </Link>
    </p>
  );
}