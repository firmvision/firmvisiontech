import React from "react";
import { motion } from "framer-motion";
import { Cable, Camera, Wifi, Server, ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Cable className="w-8 h-8" />,
      title: "Fiber Optic Installation",
      text: "FTTH, backbone fiber, aerial and indoor fiber deployment, fusion splicing, ODF termination, OTDR testing and link restoration."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Enterprise Networking",
      text: "LAN/WAN setup, VLAN configuration, MikroTik, UniFi, WiFi coverage, router/switch deployment and network troubleshooting."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "CCTV & Security Systems",
      text: "IP camera installation, surveillance design, NVR setup, remote viewing, access control support and security infrastructure."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IPTV & Server Solutions",
      text: "IPTV platform installation, media server support, headend integration, streaming infrastructure and technical operations support."
    }
  ];

  const strengths = [
    "Fiber deployment and fault restoration",
    "OTDR testing and optical link verification",
    "Campus and enterprise network setup",
    "CCTV, IPTV and structured cabling",
    "Professional documentation and support",
    "Fast response for technical faults"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center font-black">FV</div>
            <div>
              <h1 className="font-bold leading-tight">Firmvision Technologies</h1>
              <p className="text-xs text-cyan-300">Fiber • Network • Security</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
          <a href="https://wa.me/2348169736055" className="hidden md:inline-flex items-center gap-2 bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
            WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <section className="relative pt-36 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-2 text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 rounded-full text-sm mb-6">
              <ShieldCheck className="w-4 h-4" /> Reliable Digital Infrastructure
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Fiber, Network, CCTV & IPTV Solutions for Modern Businesses
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mb-8">
              Firmvision Technologies delivers professional fiber optic installation, enterprise networking, surveillance systems and IPTV infrastructure for homes, schools, churches, hotels and organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-2xl font-bold text-center hover:bg-cyan-300 transition">
                Request a Quote
              </a>
              <a href="#services" className="border border-white/20 px-7 py-4 rounded-2xl font-bold text-center hover:bg-white/10 transition">
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="rounded-[2rem] bg-white/10 border border-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {["FTTH Installation", "Fusion Splicing", "OTDR Testing", "CCTV Setup", "UniFi / MikroTik", "IPTV Platform"].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-900/80 border border-white/10 p-5">
                    <CheckCircle2 className="w-6 h-6 text-cyan-300 mb-4" />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-cyan-300 font-semibold mb-3">Our Services</p>
            <h3 className="text-3xl md:text-5xl font-black mb-5">Professional technical services built for reliability</h3>
            <p className="text-slate-300">We help clients design, install, troubleshoot and maintain the infrastructure that keeps their business connected and secure.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div whileHover={{ y: -8 }} key={service.title} className="rounded-3xl bg-slate-950 border border-white/10 p-7 shadow-xl">
                <div className="text-cyan-300 mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-300 text-sm leading-6">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-300 font-semibold mb-3">Why Choose Us</p>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Field-proven experience in fiber and network operations</h3>
            <p className="text-slate-300 leading-7 mb-8">
              Firmvision Technologies is built around hands-on technical experience in fiber deployment, network administration, IPTV systems, server support and enterprise troubleshooting. We focus on clean installation, reliable performance and proper documentation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex gap-3 items-start text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-300 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/10 border border-white/10 p-8">
            <h4 className="text-2xl font-black mb-6">Industries We Serve</h4>
            <div className="space-y-4 text-slate-200">
              <p>• Homes and estates</p>
              <p>• Schools and campuses</p>
              <p>• Churches and media departments</p>
              <p>• Hotels and hospitality businesses</p>
              <p>• Offices and small enterprises</p>
              <p>• ISPs and telecom support projects</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-cyan-300 font-semibold mb-3">Project Portfolio</p>
            <h3 className="text-3xl md:text-5xl font-black mb-5">Showcase your completed work</h3>
            <p className="text-slate-300">Replace these cards with real photos from fiber routes, splice closures, racks, CCTV installations, OTDR traces and server rooms.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Campus Fiber Backbone", "CCTV Installation", "Network Rack Setup"].map((project) => (
              <div key={project} className="rounded-3xl bg-slate-950 border border-white/10 p-6 min-h-56 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-6">
                  <Cable className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">{project}</h4>
                <p className="text-slate-400 text-sm">Professional installation, testing, labeling and documentation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-cyan-400 text-slate-950 p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-5">Need a reliable technical partner?</h3>
          <p className="max-w-2xl mx-auto mb-8 text-slate-800">
            Contact Firmvision Technologies for fiber installation, CCTV setup, network troubleshooting, IPTV deployment and technical support.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/60 rounded-2xl p-5 flex gap-3 items-center">
              <Phone className="w-5 h-5" />
              <span>+234 816 973 6055</span>
            </div>
            <div className="bg-white/60 rounded-2xl p-5 flex gap-3 items-center">
              <Mail className="w-5 h-5" />
              <span>firmvisiontech@gmail.com</span>
            </div>
            <div className="bg-white/60 rounded-2xl p-5 flex gap-3 items-center">
              <MapPin className="w-5 h-5" />
              <span>Nigeria</span>
            </div>
          </div>
          <a href="https://wa.me/2348169736055" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition">
            Chat on WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Firmvision Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
