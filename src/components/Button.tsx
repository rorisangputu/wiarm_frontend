interface buttonProps {
  text: string;
  styles: string;
}
const Button = ({ text, styles }: buttonProps) => {
  return (
    <button
      className={`flex items-center shadow gap-2 bg-green-800 rounded-xl py-3 px-4 text-white ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
