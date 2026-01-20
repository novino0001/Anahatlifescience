"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Award, ShieldCheck, Microscope, Target, Eye, Globe2, FlaskConical, Phone } from "lucide-react"

export default function Home() {
  const productCategories = [
    {
      name: "Tablets & Capsules",
      count: "240+",
      description: "Wide range of tablets, capsules, oral liquids, and dry syrups",
      products: [
        "Paracetamol 500mg",
        "Atorvastatin Calcium 10-40mg",
        "Diclofenac Sodium",
        "Sildenafil 50-100mg",
        "Azithromycin",
        "Ciprofloxacin",
        "Omeprazole & Domperidone",
        "And 232 more...",
      ],
    },
    {
      name: "Injectable Products",
      count: "165+",
      description: "Comprehensive range of injections, eye drops, and pre-filled syringes",
      products: [
        "Artesunate Injection 30-120mg",
        "Citicoline Sodium Injection",
        "Dexamethasone Injection",
        "Ceftriaxone Injection 1gm",
        "Vancomycin HCl Injection",
        "Meropenem Injection 1gm",
        "Enoxaparin 20-80mg",
        "And 158 more...",
      ],
    },
    {
      name: "Effervescent & Powders",
      count: "28+",
      description: "Effervescent tablets, powders for oral suspension, and dry formulations",
      products: [
        "Pertamol Effervescent 500mg",
        "Paracetamol + Diclofenac Effervescent",
        "Omeprazole Powder",
        "Esomeprazole Powder",
        "N-Acetyl Cysteine 600mg",
        "Sildenafil Effervescent",
        "Anti-cold Powders",
        "And 21 more...",
      ],
    },
    {
      name: "External Applications",
      count: "34+",
      description: "Topical gels, creams, ointments, and medicated soaps for external use",
      products: [
        "Aceclofenac + Menthol Gel",
        "Bacitracin, Neomycin & Polymyxin B Ointment",
        "Beclomethasone Cream",
        "Clindamycin & Benzoyl Peroxide Gel",
        "Minoxidil Solution",
        "Ketoconazole Medicated Soap",
        "Hydroquinone, Tretinoin & Hydrocortisone Cream",
        "And 27 more...",
      ],
    },
    {
      name: "Cosmetic & Dermatology",
      count: "41+",
      description: "Premium skincare, haircare, and cosmetic products for beauty and wellness",
      products: [
        "AcneRelief Face Wash Gel",
        "Skin Glow Serum with Hyaluronic Acid",
        "Anti-Aging Cream with Retinol",
        "Hair Growth Activator Serum",
        "Sun Screen Cream SPF 30",
        "Stretch Mark Care Cream",
        "Eye Cream with Kojic Acid",
        "And 34 more...",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen sm:min-h-[90vh] flex items-center pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-20 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/clean-medical-laboratory-bright.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-[1.1] mb-4 sm:mb-6 text-slate-900 tracking-tight">
              Innovating for a <br className="hidden sm:block" />
              <span className="text-emerald-600">Healthier Tomorrow</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 text-pretty leading-relaxed max-w-2xl font-medium">
              Anahat Life Sciences Pvt. Ltd. integrates advanced research with global standards to deliver high-quality
              pharmaceutical care across the globe.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transition-all w-full sm:w-auto"
              >
                Our Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-900 border-slate-300 hover:bg-slate-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all bg-white w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Client Effective Addition */}
      <section className="bg-white py-8 sm:py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { label: "Products", value: "500+" },
              { label: "Global Presence", value: "25+" },
              { label: "R&D Patents", value: "15+" },
              { label: "Happy Clients", value: "5000+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1 py-4 sm:py-0">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="relative">
              <img
                src="/medical-scientists-working-together.jpg"
                alt="About Anahat"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 bg-primary text-white p-4 sm:p-8 rounded-2xl hidden sm:block">
                <p className="text-2xl sm:text-4xl font-bold">10+</p>
                <p className="text-xs sm:text-sm">Years of Excellence</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                <Globe2 className="w-3 h-3" />
                Global Standards
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
                Dedicated to Life, Committed to Health
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Founded with a vision to redefine pharmaceutical standards, Anahat Life Sciences specializes in the
                manufacturing and distribution of life-saving medicines. Our world-class facilities in Aurangabad ensure
                that every product meets rigorous international benchmarks.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: FlaskConical, title: "Modern R&D", desc: "Equipped with latest technology." },
                  { icon: ShieldCheck, title: "Quality First", desc: "GMP & ISO certified process." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border bg-slate-50">
                    <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Client Effective Addition */}
      <section id="quality" className="py-12 sm:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/10 skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h4>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
                To serve humanity by providing high-quality medicines at affordable prices, ensuring that healthcare is
                accessible to every corner of the world through continuous innovation and excellence.
              </p>
            </div>
            <div className="p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-emerald-400 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h4>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
                To be a global leader in the pharmaceutical industry, recognized for our commitment to quality,
                patient-centric approach, and pioneering research that transforms the future of medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Product Catalog Section - CHANGE: Added Excel download capability */}
      <section className="py-12 sm:py-24 bg-emerald-50 border-t border-emerald-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Complete Product Catalog</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
              Download our comprehensive product catalog with detailed specifications, pricing, and availability
              information for all 500+ products.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-12 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-emerald-100 rounded-full mx-auto">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Access the complete Excel spreadsheet containing all product information, dosages, formulations, and
                regulatory details.
              </p>

              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg inline-flex items-center gap-3 font-semibold transition-all w-full sm:w-auto justify-center">
                <a href="/api/catalog" download aria-label="Download Anahat Product List" className="inline-flex items-center gap-3">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Download Complete Catalog</span>
                  <span className="sm:hidden">Download Catalog</span>
                </a>
              </Button>

              <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
                📄 Excel Format | 📊 All Product Categories | 🔒 Secure Download
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-12 sm:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">Our Comprehensive Product Range</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Over 500 high-quality pharmaceutical products across five therapeutic segments, all manufactured to global
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8">
            {productCategories.map((category, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-emerald-600"
              >
                <CardContent className="p-4 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">{category.name}</h3>
                      <p className="text-xs sm:text-base text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="bg-emerald-100 text-emerald-700 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-lg shrink-0">
                      {category.count}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
                    {category.products.map((product, pidx) => (
                      <div
                        key={pidx}
                        className="p-2 sm:p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
                      >
                        <p className="text-xs sm:text-sm font-medium text-slate-700">{product}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
              Looking for specific products? Contact our team for detailed product information and availability.
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg rounded-full shadow-lg w-full sm:w-auto"
            >
              Get Product Information
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values Section - Refined */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-base sm:text-base">The pillars that define our commitment to medical excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">
                <ShieldCheck className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Integrity</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Unwavering commitment to ethical standards in every dosage we produce.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">
                <Microscope className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Innovation</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Constant research to find more effective ways to treat and heal.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">
                <Award className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Quality</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Rigorous testing to ensure every product meets global safety benchmarks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">Get in Touch</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Reach out to us for any inquiries or partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {/* Address Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-emerald-100">
                      <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h5 className="font-bold mb-1 text-sm sm:text-base">Visit Us</h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      G.F H No.5-25-100/2 Ajab Nagar
                      <br />
                      Near Suraya Marble
                      <br />
                      Aurangabad (MH), Aurangabad
                      <br />
                      431001, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Phone Contact - CHANGED: Replaced form with direct phone contact */}
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-emerald-100">
                      <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="grid gap-2 sm:gap-3 w-full">
                    <h5 className="font-bold mb-1 text-sm sm:text-base">Contact Us</h5>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+918502004099"
                        className="text-base sm:text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-2"
                      >
                        +91 8502004099
                      </a>
                      <Button
                        onClick={() => window.open("https://wa.me/918502004099", "_blank")}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base w-full"
                      >
                        Contact on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-emerald-100">
                      <Mail className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h5 className="font-bold mb-1 text-sm sm:text-base">Email Contacts</h5>
                    <p className="text-xs sm:text-sm">
                      <strong>Finance:</strong>{" "}
                      <a href="mailto:Financeanahat@gmail.com" className="text-primary hover:underline break-all">
                        Financeanahat@gmail.com
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm">
                      <strong>Marketing:</strong>{" "}
                      <a href="mailto:Marketinganahat@gmail.com" className="text-primary hover:underline break-all">
                        Marketinganahat@gmail.com
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm">
                      <strong>Regulatory:</strong>{" "}
                      <a href="mailto:Regulatoryanahat@gmail.com" className="text-primary hover:underline break-all">
                        Regulatoryanahat@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map with Google Maps embed */}
              <div className="w-full h-[300px] sm:h-[400px] bg-muted rounded-2xl overflow-hidden shadow-inner relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0756447894745!2d75.32!3d19.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815130ed6b5%3A0x6d82f05d4212270!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-16 pb-12 sm:pb-16 mb-8 sm:mb-12 border-b border-slate-700">
            <div className="sm:col-span-2 md:col-span-4">
              <div className="inline-block mb-6 sm:mb-10 h-16 sm:h-24 md:h-32">
                <img src="/logo.jpg" alt="Anahat Logo" className="h-full w-auto object-contain" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-8 pr-0 sm:pr-10">
                Leading the way in pharmaceutical excellence. We combine science and compassion to deliver healthcare
                solutions that truly matter.
              </p>
            </div>
            <div className="sm:col-span-1 md:col-span-2">
              <h6 className="font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-slate-100">Company</h6>
              <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-slate-300">
                <li>
                  <Link href="#about" className="hover:text-emerald-300 transition-colors font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-emerald-300 transition-colors font-medium">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-emerald-300 transition-colors font-medium">
                    Quality Control
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-emerald-300 transition-colors font-medium">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-2">
              <h6 className="font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-slate-100">Divisions</h6>
              <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-slate-300">
                <li>Pharmaceuticals</li>
                <li>Nutraceuticals</li>
                <li>Life Sciences</li>
                <li>Research & Development</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-medium text-center sm:text-left">
            <p>© 2025 Anahat Life Sciences Private Limited. All Rights Reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="#" className="hover:text-emerald-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
