import Link from "next/link";
import { GreeneryHeader, PassLink, HeaderNav } from "./Header.style";
import MainLogo from "public/assets/logo/mainLogo.svg";

export function Header() {
  return (
    <GreeneryHeader>
      <h1>
        <Link href="/" passHref>
          <PassLink>
            <MainLogo className="mainLogo" />
          </PassLink>
        </Link>
      </h1>
      <HeaderNav>
        <ul>
          <li>
            <Link href="#">커뮤니티</Link>
          </li>
          <li>
            <Link href="#">식물추천</Link>
          </li>
          <li>
            <Link href="#">초록위키</Link>
          </li>
        </ul>
      </HeaderNav>
    </GreeneryHeader>
  );
}
