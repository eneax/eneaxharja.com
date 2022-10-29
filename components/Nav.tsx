import Link from "next/link";
import Image from "next/image";

const ProfileImage = () => (
  <div className="rounded-full shadow-lg p-[1px] bg-primary-50 group transform transition ease-out hover:scale-105">
    <div className="rounded-full p-[1px] h-[36px] w-[36px] transition duration-300 group-hover:scale-105">
      <Image
        src="/images/avatar.png"
        alt="A photo of Enea Xharja"
        quality={95}
        className="rounded-full"
        width={36}
        height={36}
      />
    </div>
  </div>
);

const Nav = () => (
  <nav className="antialiased">
    <div className="max-w-2xl mx-auto p-8 md:px-0">
      <div className="rounded-2xl bg-gray-900/90 px-6 py-2.5 bg-glass">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" title="Enea Xharja" className="rounded-full">
              <ProfileImage />
            </Link>
          </div>

          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/about" className="text-primary-50 no-underline">
              About
            </Link>

            <Link href="/archives" className="text-primary-50 no-underline">
              Archives
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
