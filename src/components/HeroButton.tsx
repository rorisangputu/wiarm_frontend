interface styleProps {
  styles: string;
}

const HeroButton = ({ styles }: styleProps) => {
  return <button className={`${styles}`}>Join Us</button>;
};

export default HeroButton;
