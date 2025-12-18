import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 bg-amber-50 px-6 py-16">
      
      {/* Logo */}
      <Image
        src="/0crumbs_logo.jpeg"
        alt="0crumbs Logo"
        width={220}
        height={100}
        priority
        className="rounded-xl shadow-lg"
      />

      {/* Hero / Tagline */}
      <h1 className="text-5xl font-extrabold text-amber-800 text-center">
        Freshly baked, small-batch cookies
      </h1>

      <p className="max-w-lg text-center text-amber-900/80 text-lg">
        Welcome to 0crumbs! Check out our weekly lineup of delicious cookies.
      </p>

      {/* CTA Button */}
      <button className="rounded-xl bg-amber-700 px-8 py-3 text-white text-lg hover:bg-amber-800 transition">
        Contact the Spano sisters @0crumbs_official
      </button>

      {/* Optional: small footer note */}
      <p className="mt-8 text-amber-900/60 text-sm text-center max-w-xs">
        Made with love by the Spano sisters.
      </p>
    </main>
  );
}
