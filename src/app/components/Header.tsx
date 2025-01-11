import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0a0a0a] dark:bg-[#000000] border-b border-black/10 dark:border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center -my-4">
            <Image
              className="w-auto h-14 sm:h-[50px]"
              src="/ezid-logo-edited.png"
              alt="EZID logo"
              width={250}
              height={50}
              priority
            />
          </Link>
          <nav className="hidden sm:flex space-x-4">
            <Link href="/about" className="text-white/90 hover:text-white">
              Pricing
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
