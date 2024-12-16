import { FaHome } from "react-icons/fa";
export default function Navigation() {
  return (
    <div className="flex items-center justify-center gap-5 text-xl text-orange-200">
      <FaHome className="icon" />
      <div>|</div>
      <button className="navButton">Books</button>
      <button className="navButton">About</button>
      <button className="navButton">Contact</button>
    </div>
  );
}
