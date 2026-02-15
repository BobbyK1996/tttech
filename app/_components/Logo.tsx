import Image from "next/image";
import Link from "next/link";
import logoLarge from "@/public/logo-white.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logoLarge}
        width={160}
        alt="TT Tech Logo"
        className="h-auto sm:w-48"
      />
    </Link>
  );
};

export default Logo;
