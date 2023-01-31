import Link from "next/link";

type ButtonProps = {
  btnText: string;
  btnLink: string;
};

const Button = ({ btnText, btnLink }: ButtonProps) => (
  <Link href={`/${btnLink}`} className="btn">
    {btnText}
  </Link>
);

export default Button;
