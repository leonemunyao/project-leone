import React from 'react';
import { cn } from '@/lib/utils';

export default function Education() {
  const educationData = [
    {
      degree: "Software Engineering",
      institution: "ALX Africa",
      period: "Aug 2023 - Aug 2024"
    },
    {
      degree: "Bachelor of Science in Statistics and Computer Science",
      institution: "Technical University of Mombasa",
      period: "Sep 2020 - Aug 2024"
    },
    {
      degree: "Cyber Security Essential 1 and Introduction to Cyber Security",
      institution: "Cisco Networking Academy",
      period: "Apr 2022 - Aug 2022"
    }
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
          <div className="space-y-8 mt-64">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">EDUCATION</h1>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  My educational journey has equipped me with a strong foundation in software development and blockchain technology, preparing me for the challenges of modern development.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-32">
            <div className="text-[99px] font-bold text-white/20 absolute top-20 right-8 pointer-events-none">
              2020 - 2024
            </div>
            
            <div className="space-y-8 relative">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative pl-6 border-l-2",
                    index === educationData.length - 1 
                      ? "border-transparent" 
                      : "border-[#5BB5F0]"
                  )}
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#5BB5F0]" />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">
                    {edu.institution} | {edu.period}
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