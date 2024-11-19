"use client";

import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const contactInfo = {
    phone: "+254 712 345 678",
    email: "leonemunyao@gmail.com",
    website: "leonemunyao.com",
    address: "Mombasa, Kenya",
    instagram: "@leonemunyao"
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">GET IN TOUCH</h1>
          <p className="text-blue-400 italic">Let&apos;s Work Together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone & Mobile</h3>
              <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email & Website</h3>
              <p className="text-gray-400 text-sm">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm">{contactInfo.website}</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-400 text-sm">{contactInfo.address}</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-gray-400 text-sm">{contactInfo.instagram}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 mt-24">
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <h2 className="text-4xl font-bold tracking-wider text-gray-700">LEONE MUNYAO</h2>
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>
      </div>
    </div>
  );
}
