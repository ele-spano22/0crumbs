import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 bg-amber-100 p-4 shadow-md">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Menu</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
