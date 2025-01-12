// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#171717] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Access Made Simple.
            <br />
            Security Redefined.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Say goodbye to passwords. EzID leverages blockchain technology to
            revolutionize identity management, providing secure, instant access
            to all your tools with a single digital identity.
          </p>
          <div className="max-w-md mx-auto mb-16">
            <Link
              href="/early-access"
              className="inline-flex px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get Early Access
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Limited time offer: Secure lifetime access for a one-time payment
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Passwordless Access</h3>
            <p className="text-gray-400">
              One secure blockchain identity replaces all your passwords and
              login credentials.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Security</h3>
            <p className="text-gray-400">
              Decentralized authentication ensures your identity remains secure
              and under your control.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Universal Integration
            </h3>
            <p className="text-gray-400">
              Seamlessly access all your applications with a single secure
              identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
