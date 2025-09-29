// components/Button.jsx
export default function Button({ label, onClick, variant = "primary" }) {
  const baseStyles = "px-6 py-2 rounded-full font-semibold transition duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
}