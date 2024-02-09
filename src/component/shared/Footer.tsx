import Banner from "/images/Footer.png";
import Banner1 from "/images/Footer1.png";

const Footer = () => {
  return (
    <div>
      <img src={Banner} alt={Banner} className="mb-[-2px]" />
      <img src={Banner1} alt={Banner1} />
    </div>
  );
};

export default Footer;
