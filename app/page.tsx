import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-black to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#5BB5F0] font-mono">Hello !!!</p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                I&apos;m Leone<br />Munyao
              </h1>
              < div className="inline-block bg-[#5BB5F0]/10 px-6 py-1 rounded">
                <p className="text-[#5BB5F0] font-mono text-sm">
                  A Developer
                </p>
              </div>
            </div>

            <p className="text-gray-400 max-w-xl leading-relaxed">
              Hello, I'm Leone Munyao, a Software and Web3 Developer passionate about creating innovative blockchain solutions and efficient, user-friendly applications. I'm passionate about using technology to solve problems and build a better, more connected world.
            </p>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#5BB5F0] to-transparent" />
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src="/images/leone.jpeg"
                alt="Leone Munyao"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 600px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}