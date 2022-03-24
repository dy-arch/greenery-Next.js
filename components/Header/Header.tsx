import Link from "next/link";
import Image from "next/image";
import { GreeneryHeader } from "./Header.style";

function Header() {
  return (
    <GreeneryHeader>
      <h1>
        <Link href="/" passHref>
          <Image src="" alt="" />
        </Link>
      </h1>
    </GreeneryHeader>
  );
}

export default Header;
