interface blackButtonProps {
  text: string;
}

const BlackButton = ({ text }: blackButtonProps) => {
  return (
    <button
      className="flex capitalize font-light text-md md:text-lg items-center gap-2 
      bg-[#232d25] rounded-lg py-3 px-4 text-white md:py-4 md:px-6"
    >
      {text}
    </button>
  );
};

export default BlackButton;
