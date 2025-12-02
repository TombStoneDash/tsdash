import Link from 'next/link';

const shortcuts = [
  { slug: '/castalert', label: 'CastAlert App', desc: 'iOS casting notifications' },
  { slug: '/actorlab', label: 'Actor Lab', desc: 'AI tools for actors' },
  { slug: '/podcast', label: 'Podcast', desc: 'TombStone Dash Talks' },
  { slug: '/dash', label: 'Main Site', desc: 'tombstonedash.com' },
];

const socials = [
  { slug: '/ig', label: 'Instagram' },
  { slug: '/x', label: 'X / Twitter' },
  { slug: '/yt', label: 'YouTube' },
  { slug: '/linkedin', label: 'LinkedIn' },
  { slug: '/github', label: 'GitHub' },
  { slug: '/tiktok', label: 'TikTok' },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Stripe bar */}
      <div className="stripe-bar" />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              ts<span style={{ color: '#C4956A' }}>dash</span>.com
            </h1>
            <p className="text-white/50">
              Quick links to TombStone Dash
            </p>
          </div>

          {/* Main shortcuts */}
          <div className="space-y-3 mb-10">
            {shortcuts.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-white/40 text-sm ml-2">{item.desc}</span>
                  </div>
                  <span className="text-white/30 group-hover:text-white/60 transition-colors">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p className="text-white/30 text-sm mb-4 text-center">Social Links</p>
            <div className="flex flex-wrap justify-center gap-2">
              {socials.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-white/20 text-xs mt-12">
            Use tsdash.com/[shortcut] for quick access
          </p>
        </div>
      </div>
    </main>
  );
}
