'use client'

import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone } from "lucide-react"

export function LandingPage() {
  const whatsappNumber = "5511934292827" 
  const whatsappMessage = encodeURIComponent("Ola Ariane, tudo bem? Gostaria de realizar um orçamento!")

  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="bg-black text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mommy Tears Tattoo</h1>
          <nav className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-gray-300">Sobre</Link>
            <Link href="#artists" className="hover:text-gray-300">Artistas</Link>
            <Link href="#contact" className="hover:text-gray-300">Contato</Link>
          </nav>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="/media/studio.jpg"
            alt="Tattoo studio interior"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Mommy Tears Tattoo</h2>
            <p className="text-xl md:text-2xl mb-8">Tatuagens Clássicas & Autêntica</p>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre nosso estudio</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
            Aqui, a atmosfera amigável combina arte contemporânea com elementos rústicos. Nossos artistas qualificados transformam suas ideias em obras personalizadas, utilizando materiais de alta qualidade e rigorosa higiene.
            Com consultas personalizadas, garantimos que você se sinta à vontade para expressar sua individualidade. Venha nos visitar e descubra uma experiência única!
            </p> 
          </div>
        </section>

        <section id="artists" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos artistas</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <Image
                  src="/media/ari-profile.png"
                  alt="Sarah Johnson"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Ariane Ievenes</h3>
                <p className="text-gray-600 mb-4">Expert em OldSchool</p>
                <Link href="https://www.instagram.com/oldiscool_tattoo/" className="text-blue-600 hover:underline" target="_blank">Instagram</Link>
              </div>
              <div className="text-center">
                <Image
                  src="/media/kaue-profile.png"
                  alt="Mike Chen"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Kaue Stanojev</h3>
                <p className="text-gray-600 mb-4">Expert em OldSchool</p>
                <Link href="https://www.instagram.com/oldiscool_tattoo/" className="text-blue-600 hover:underline" target="_blank">Instagram</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Mommy Tears Tattoo</h3>
              <p>Itaquera - São Paulo / ZL</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/mommytearstattoo/" className="hover:text-gray-300" target="_blank">
                <Instagram size={24} />
              </Link>
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="hover:text-gray-300"  target="_blank">
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Mommy Tears Tattoo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contact us on WhatsApp" target="_blank" >
        <Phone size={24} />
      </Link>
    </div>
  )
}