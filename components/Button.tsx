import Link from "next/link";

type ButtonProps = {
  btnText: string;
  btnLink: string;
};

const Button = ({ btnText, btnLink }: ButtonProps) => (
  <Link
    href={`/${btnLink}`}
    className="no-underline font-semibold px-4 py-2.5 rounded-2xl text-black bg-primary-400 hover:bg-primary-400/95 transition duration-300"
  >
    {btnText}
  </Link>
);

export default Button;
