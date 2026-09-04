import { Link } from 'react-router-dom'
import { galleryImages } from '../data/site.js'
import { members } from '../data/members.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] grid place-items-center text-white overflow-hidden bg-[linear-gradient(120deg,rgba(11,30,63,.45),rgba(18,42,87,.35)),url('/events/10.png')] bg-cover bg-center">
        <div className="relative text-center max-w-[1000px] px-5 pt-30 pb-15">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 text-xs tracking-[2px] uppercase mb-5">
            Since 1997 • A National Movement
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Building the Future of <span className="text-gradient">Indian Sports</span>
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto mt-5 mb-8">
            More than an organization — a movement to revolutionize India's sports ecosystem,
            identify untapped potential, and provide elite resources so every athlete can compete at the highest level.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link to="/about" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">Discover Our Mission →</Link>
            <Link to="/athletes" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-navy transition-all inline-flex items-center gap-2">Meet Our Athletes</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-15 bg-white/6 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">28+</strong><span className="text-xs opacity-85 tracking-wider">YEARS OF IMPACT</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">5</strong><span className="text-xs opacity-85 tracking-wider">STRATEGIC PILLARS</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">100+</strong><span className="text-xs opacity-85 tracking-wider">EVENTS HOSTED</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">∞</strong><span className="text-xs opacity-85 tracking-wider">UNTAPPED POTENTIAL</span></div>
          </div>
        </div>
      </section>

      {/* UPCOMING TOURNAMENT */}
      <section className="bg-[#0b1e3f] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,158,68,.12),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-5 relative">
          <div className="mb-8">
            <span className="bg-red-600 text-white text-[11px] font-bold tracking-[2px] uppercase py-1.5 px-4 rounded-full">
              ⚡ Entries close 24 Sep 2026 · Only 64 seats
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            {/* Details */}
            <div>
              <span className="text-accent font-bold tracking-[3px] text-xs uppercase">Upcoming Tournament</span>
              <h2 className="text-white text-3xl md:text-5xl font-black font-heading mt-2 mb-1 leading-tight">
                Tamil Nadu <span className="text-gradient">Snooker</span> 2026
              </h2>
              <p className="text-white/50 text-sm uppercase tracking-widest mb-7">The Open State Championship · Chennai, Tamil Nadu</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Date', value: '01 – 04 October 2026' },
                  { label: 'Venue', value: "Killer's Cue, Arumbakkam" },
                  { label: 'Entry Fee', value: '₹2,000 / Player' },
                  { label: 'Format', value: '64-Player Knockout' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/6 border border-white/12 rounded-xl px-4 py-3">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-0.5">{label}</span>
                    <span className="text-white font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                <p className="text-white/50 text-[11px] uppercase tracking-widest mb-4">Prize Money · ₹1,50,000 Total Pool</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { amount: '₹60,000', title: 'Champion' },
                    { amount: '₹35,000', title: 'Runner-up' },
                    { amount: '₹10,000', title: 'Highest Break' },
                  ].map(({ amount, title }) => (
                    <div key={title}>
                      <strong className="block num-gradient text-xl md:text-2xl font-black font-heading">{amount}</strong>
                      <span className="text-white/45 text-[11px]">{title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-white font-bold mb-4">How to Register</h3>
              <ol className="space-y-3 mb-7">
                {[
                  'Scan the QR code & pay exactly ₹2,000 on any UPI app',
                  'Screenshot the UTR / reference number from the success page',
                  'WhatsApp it + your name, age, city & club to confirm your seat',
                  'Receive your draw number before 27 Sep 2026',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-white/70 text-sm items-start">
                    <span className="btn-gradient text-white w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="flex flex-wrap gap-3">
                <a href="/snooker/pamphlet.pdf" target="_blank" rel="noopener noreferrer"
                  className="border border-white/25 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  Download Pamphlet ↓
                </a>
                <Link to="/gallery" className="border border-accent/50 text-accent px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/10 transition-all inline-flex items-center gap-2">
                  View All Upcoming Events →
                </Link>
              </div>
              <p className="text-white/30 text-xs mt-4">Maha Seva Dal Foundation · Axis Bank · First 64 paid entries only. Unconfirmed payments refunded in full.</p>
            </div>

            {/* Entry Card */}
            <div className="mx-auto lg:mx-0 w-full max-w-[300px] lg:max-w-none">
              <img
                src="/snooker/entry-card.png"
                alt="Tamil Nadu Snooker 2026 — Scan & Pay to Enter"
                className="w-full rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,.55)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-15 items-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(11,30,63,.08)] aspect-[4/3]">
            <img src="/events/7.png" alt="ISYDCI athletes" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">About ISYDCI</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2 mb-4">More Than an Organization — It Is a Movement.</h2>
            <p className="text-slate-700 text-base leading-relaxed">
              The <b>International Sports and Youth Development Campaign of India</b> is committed to
              revolutionizing the national sports ecosystem by identifying untapped potential and
              providing the elite resources necessary to compete at the highest levels.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Ecosystem','Untapped Potential','Unyielding Spirit','Elite Resources','Nation First'].map(t => (
                <span key={t} className="bg-green-50 text-accent px-3 py-1.5 rounded-full text-xs font-semibold">{t}</span>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/about" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ATHLETES */}
      <section className="bg-[#f7f2e2] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">Rising Stars</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2">Our Athletes</h2>
            <p className="text-slate-500 mt-3">Meet the talented young athletes enrolled under the ISYDCI programme.</p>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-6 sm:gap-10 md:gap-16">
            {members.filter(m => m.photo).map(m => (
              <Link to="/athletes" key={m.id} className="group flex flex-col items-center gap-3">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-navy/15 shadow-[0_8px_30px_rgba(11,30,63,.1)] transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_8px_30px_rgba(47,158,68,.25)] group-hover:-translate-y-1">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center">
                  <span className="font-heading font-bold text-navy text-sm block">{m.name}</span>
                  <span className="text-xs text-slate-500">{m.sport}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/athletes" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">View All Athletes →</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">On Ground</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2">Recent Events</h2>
            <p className="text-slate-500 mt-3">Snapshots from training camps, tournaments and community drives.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5">
            {galleryImages.slice(0, 6).map((g, i) => (
              <Link to="/gallery" key={i} className="group relative overflow-hidden rounded-xl aspect-video shadow-[0_10px_30px_rgba(11,30,63,.08)] bg-gray-200">
                <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute left-3.5 bottom-3 text-white font-semibold text-[13px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">{g.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">View Full Gallery →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
