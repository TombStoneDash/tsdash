import Link from 'next/link';

const links = [
  { slug: '/castalert', label: 'CastAlert', desc: 'iOS casting app' },
  { slug: '/actorlab', label: 'Actor Lab', desc: 'AI for actors' },
  { slug: '/podcast', label: 'Podcast', desc: 'Conversations' },
  { slug: '/dash', label: 'Portfolio', desc: 'tombstonedash.com' },
];

const socials = [
  { slug: '/ig', label: 'IG' },
  { slug: '/x', label: 'X' },
  { slug: '/yt', label: 'YT' },
  { slug: '/linkedin', label: 'LI' },
  { slug: '/github', label: 'GH' },
  { slug: '/tiktok', label: 'TT' },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Stripe bar */}
      <div className="stripe-bar" />

      <div className="flex-1 flex items-center justify-center p-6 py-16">
        <div className="max-w-4xl w-full">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1
                className="text-6xl md:text-8xl mb-2 leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                The Dash
              </h1>
              <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <span className="text-white/40">1986</span>
                <span className="dash-symbol">—</span>
                <span className="text-white/40">????</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-white/70">
                Between those two dates on a tombstone lies a simple dash.
              </p>
              <p className="text-white/70">
                That dash represents everything: every breath, every choice, every moment of your life.
              </p>
              <p className="philosophy-highlight">
                What matters isn&apos;t when it began or when it ends—it&apos;s what you do with that dash.
              </p>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="philosophy-card">
              <h3 className="card-title">Create</h3>
              <p className="text-white/60 text-sm">
                Build things that didn&apos;t exist before. Leave your mark through your work.
              </p>
            </div>

            <div className="philosophy-card">
              <h3 className="card-title">Connect</h3>
              <p className="text-white/60 text-sm">
                The relationships you build define the dash more than anything else.
              </p>
            </div>

            <div className="philosophy-card">
              <h3 className="card-title">Live</h3>
              <p className="text-white/60 text-sm">
                Don&apos;t wait for the perfect moment. The dash is happening right now.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl text-center mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              My Dash
            </h2>

            <div className="space-y-3 mb-8">
              {links.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="link-card"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <span className="text-white/40 text-sm ml-3">{item.desc}</span>
                    </div>
                    <span className="text-coral opacity-60 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {socials.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="social-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Footer Quote */}
            <div className="text-center">
              <p
                className="text-xl md:text-2xl mb-2 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C4956A' }}
              >
                &ldquo;Make your dash count.&rdquo;
              </p>
              <p className="text-white/30 text-sm">
                — TombStone Dash
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
