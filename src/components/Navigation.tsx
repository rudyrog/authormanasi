import Link from "next/link";
import { FaHome } from "react-icons/fa";
export default function Navigation() {
  return (
    <div className="flex items-center justify-center gap-3 text-xl text-orange-200">
      <Link href={"/"}>
        <FaHome className="icon" />
      </Link>
      <div>|</div>
      <Link href={"/books"} className="navButton">
        Books
      </Link>
      <Link href={"/about"} className="navButton">
        About
      </Link>
      <Link href={"/contact"} className="navButton">
        Contact
      </Link>
    </div>
  );
}
