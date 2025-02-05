import Image from 'next/image';

export default function About() {
  const skills = [
    'Debugging',
    'Shell Navigation',
    'Rust',
    'Move',
    'Linux',
    'C Programming',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Python'
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-black to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="relative h-[520px] hidden lg:block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src="/images/coding love.jpeg"
                alt="Leone Munyao"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">My Biography</h1>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  I'm a Software Developer with a passion for creating impactful web and blockchain applications. My goal is to leverage technology to solve real-world problems and deliver high-quality, reliable code.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Skills & Interest</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#5BB5F0] to-transparent" />
          </div>
        </div>
      </div>
    </main>
  );
}