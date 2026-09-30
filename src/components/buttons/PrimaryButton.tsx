type ButtonProps = {
  text: string;
};

function PrimaryButton({ text }: ButtonProps) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl transition duration-300">
      {text}
    </button>
  );
}

export default PrimaryButton;