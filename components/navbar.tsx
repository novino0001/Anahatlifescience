"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 cursor-pointer">
          <div className="relative h-14 md:h-20 w-auto flex items-center bg-white p-2 rounded-lg transition-all">
            <img
              src="/logo.jpg"
              alt="Anahat Life Science Logo"
              className="h-full w-auto object-contain"
              style={{ maxWidth: "240px" }}
            />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Products", id: "products" },
            { label: "Quality", id: "quality" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold hover:text-emerald-600 transition-colors ${"text-slate-900"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Products", id: "products" },
            { label: "Quality", id: "quality" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-lg font-medium text-left">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
