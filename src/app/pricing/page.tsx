export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#171717] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] -z-10"></div>

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Pricing
        </h1>
        {/* Add pricing content here */}
      </section>
    </div>
  );
}
