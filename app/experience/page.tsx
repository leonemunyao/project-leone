export default function Experience() {
  const experiences = [
    {
      company: "TUM Developers Club",
      position: "Social Media Manager |",
      period: "Jul 2023 - Aug 2024",
      description: "Curated and shared development courses, ensuring members had access to valuable learning resources for their tech growth. Promoted tech events, including hackathons and workshops, boosting member engagement and event participation. Maintained community standards by overseeing the club group rules to ensure discussions remained focused on technology."
    },
    {
      company: "Swahilipot Hub Foundation",
      position: "Software Developer Intern |",
      period: "Sep 2023 - Dec 2023",
      description: "Building and maintaining the Pwani Innovation Week 2023 Platform. Updating essential details including delegates list, logos and adding live X engagement. Backend Development using Django to develop a feedback platform, allowing users to submit activity-based feedback as part of my internship project. Contributed as a Tech Volunteer during significant events, including Pwani Innovation Week 2023 and the Global Opportunity Youth Network Summit 2023."
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-black to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[calc(100vh-8rem)]">
          <div className="mt-64">
            <h1 className="text-4xl font-bold text-white mb-6">EXPERIENCE</h1>
            <p className="text-gray-400 leading-relaxed mb-12">
              Professional experience in software development, focusing on blockchain technology and web applications.
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-[100px] font-bold text-white/20 absolute top-20 right-8 pointer-events-none">
              2023 - 2024
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative mt-32">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-[#5BB5F0]">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-[#5BB5F0] text-sm">
                        {exp.position} {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 pl-10">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}