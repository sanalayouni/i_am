export default function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-100 px-4 py-2 border border-[#1E4D87] text-sm rounded-lg placeholder-white  focus:ring-2 focus:ring-[#1E4D87]"
      />
    </div>
  );
}