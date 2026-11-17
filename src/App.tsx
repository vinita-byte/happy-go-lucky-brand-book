const palette = [
  { name: 'Lucky Yellow', hex: '#F8E656', role: 'Optimism · hero moments', className: 'bg-yellow' },
  { name: 'Lucky Green', hex: '#00BF63', role: 'Action · success · luck', className: 'bg-green' },
  { name: 'Cloud', hex: '#F5F5F5', role: 'Breathing room · base', className: 'bg-cloud' },
  { name: 'Soft Black', hex: '#302F34', role: 'Type · stamp · contrast', className: 'bg-ink' },
]

const personality = ['CHEERFUL', 'THOUGHTFUL', 'WITTY', 'WARM', 'HONEST']

const voicePairs = [
  ['Forgot their birthday? We’ve got you.', 'Bad friend alert!'],
  ['So close! ₹120 more for free shipping.', 'You’re cheap, add more.'],
  ['This one’s a keeper.', 'Best product ever, guaranteed!!!'],
]

const slogans = [
  'Gift happy. Get lucky.',
  'Picked like a friend would.',
  'No junk. Just joy.',
  'Thoughtful, not expensive.',
  'Unbox a little luck.',
  'Lucky them. Easy you.',
]

const phrases = [
  ['Lucky you!', 'After any purchase or win'],
  ['That’s a keeper.', 'A badge for repeat favourites'],
  ['Sorted, yaar.', 'After checkout or Gift Finder'],
  ['Luck incoming.', 'For shipping updates'],
  ['Feeling lucky?', 'For shuffles and coupon prompts'],
]

function Clover({ className = '' }: { className?: string }) {
  return <span className={`clover ${className}`} aria-hidden="true">✣</span>
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  )
}

function App() {
  const publicAsset = (file: string) => `${import.meta.env.BASE_URL}${file}`

  return (
    <main>
      <nav className="topbar">
        <a className="mini-logo" href="#top" aria-label="Happy Go Lucky home">
          H<span>G</span>L
        </a>
        <div className="nav-links">
          <a href="#brand">Brand</a>
          <a href="#voice">Voice</a>
          <a href="#visuals">Visuals</a>
          <a href="#application">In action</a>
        </div>
        <div className="edition">
          <a href={publicAsset('brand-book.md')}>Markdown</a>
          <a href={publicAsset('llms.txt')}>AI index</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">THE OFFICIAL BRAND BOOK <Clover /></p>
          <h1>Gift happy.<br /><em>Get lucky.</em></h1>
          <p className="hero-intro">A cheerful little guide to making ordinary days feel wildly thoughtful.</p>
          <div className="author-row">
            <span>Oct 25, 2026</span>
            <span>Made with care by @Vinita Mathreja</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="burst burst-one">JOY!</div>
          <img src="/happy-go-lucky-logo.png" alt="Happy Go Lucky logo" />
          <div className="scribble">yaar, this is good ↓</div>
          <div className="hero-stamp">PACKED<br />WITH<br />HEART</div>
        </div>
      </header>

      <section className="manifesto" id="brand">
        <SectionLabel number="01">Brand heart</SectionLabel>
        <div className="manifesto-grid">
          <h2>The jester.<br /><span>With a caring heart.</span></h2>
          <div>
            <p className="lead">We turn “I had to get you something” into “Yaar, how did you know?”</p>
            <p>Happy Go Lucky is 70% Entertainer and 30% Caregiver. We bring the play, never the punchline. Every gift is picked to be kept, used and grinned at—and always at a price that feels fair.</p>
          </div>
        </div>
        <div className="archetype">
          <div className="ratio">
            <div><strong>70</strong><span>%</span><p>Jester</p></div>
            <div><strong>30</strong><span>%</span><p>Caregiver</p></div>
          </div>
          <div className="archetype-notes">
            <p><strong>We delight.</strong> We never mock.</p>
            <p><strong>We surprise.</strong> We never confuse.</p>
            <p><strong>We’re playful.</strong> The facts stay clear.</p>
          </div>
        </div>
      </section>

      <section className="personality">
        <p className="eyebrow dark">IF WE WERE A PERSON...</p>
        <blockquote>“The friend who arrives late with the <u>best gift</u> in the room—and somehow remembered what you wanted three months ago.”</blockquote>
        <div className="traits">
          {personality.map((trait, index) => <span key={trait} className={index === 1 || index === 4 ? 'green' : ''}>{trait}</span>)}
        </div>
      </section>

      <section className="story">
        <SectionLabel number="02">Our story</SectionLabel>
        <div className="story-grid">
          <div className="story-title">
            <p>It started with<br />one simple rule:</p>
            <h2>Never gift<br />for the sake<br />of it.</h2>
          </div>
          <div className="story-copy">
            <p>Every pick has to be something you’ll keep, use and grin at, at a price that feels fair.</p>
            <p>So we pick everything ourselves, pack it by hand, stamp the box and slip in a handwritten note.</p>
            <p className="highlight">The goal? When it lands, the person opening it thinks, <strong>“Yaar, I’m so lucky.”</strong></p>
          </div>
          <div className="meaning">
            <div><b>Happy</b><p>The joy of choosing and opening.</p></div>
            <div><b>Go</b><p>Quick, easy and fuss-free.</p></div>
            <div><b>Lucky</b><p>The glow of being thought of.</p></div>
          </div>
        </div>
      </section>

      <section className="voice" id="voice">
        <SectionLabel number="03">Voice & tone</SectionLabel>
        <div className="voice-head">
          <h2>Sound like a friend.<br /><span>Not a storefront.</span></h2>
          <p>Short lines. Warm wit. A little Hinglish. Always kind enough to make your mom smile too.</p>
        </div>
        <div className="rules">
          {[
            ['01', 'One idea per line.', 'Quick to read. Easy to get.'],
            ['02', 'Joke about situations.', 'Never joke about people.'],
            ['03', 'Fun in the decoration.', 'Clear in facts and prices.'],
            ['04', 'Hinglish, lightly.', 'One simple phrase is plenty.'],
          ].map(([n, title, copy]) => (
            <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="say-grid">
          <div className="say yes">
            <h3>YES, SAY THIS <span>✓</span></h3>
            {voicePairs.map(([yes]) => <p key={yes}>“{yes}”</p>)}
          </div>
          <div className="say no">
            <h3>NOPE, NOT THIS <span>×</span></h3>
            {voicePairs.map(([, no]) => <p key={no}>“{no}”</p>)}
          </div>
        </div>
      </section>

      <section className="visuals" id="visuals">
        <SectionLabel number="04">Visual world</SectionLabel>
        <div className="visual-heading">
          <h2>Bright. Bold.<br />Easy on the eyes.</h2>
          <p>Use generous neutral space, confident type and one happy colour at a time. Fun should feel intentional—not noisy.</p>
        </div>
        <div className="palette">
          {palette.map((color) => (
            <article key={color.hex} className={color.className}>
              <div className="color-top"><Clover /><span>{color.hex}</span></div>
              <div><h3>{color.name}</h3><p>{color.role}</p></div>
            </article>
          ))}
        </div>
        <p className="ratio-note"><strong>THE COLOUR RULE</strong> 70% Cloud · 20% Soft Black · 10% bright, lucky colour</p>

        <div className="type-specimen">
          <div>
            <p className="eyebrow dark">DISPLAY · GEOMETRIC SANS</p>
            <div className="display-type">Big joy.<br /><span>Zero fuss.</span></div>
            <p>Use bold, compact display type for big brand statements.</p>
          </div>
          <div>
            <p className="eyebrow dark">BODY + UI · POPPINS</p>
            <div className="body-type">Clear enough for every Lucky One.</div>
            <p>Poppins keeps details friendly, readable and fuss-free—from product names to payment facts.</p>
            <div className="alphabet">Aa Bb Cc Dd Ee<br />0123456789 ₹?!</div>
          </div>
        </div>
      </section>

      <section className="logo-section">
        <SectionLabel number="05">Logo system</SectionLabel>
        <div className="logo-grid">
          <div className="logo-card light"><img src="/happy-go-lucky-logo.png" alt="Primary Happy Go Lucky logo" /><span>01 · PRIMARY</span></div>
          <div className="logo-card green-card"><img src="/happy-go-lucky-logo.png" alt="Happy Go Lucky logo on green" /><span>02 · HIGH ENERGY</span></div>
          <div className="stamp-card">
            <div className="round-stamp"><Clover /><b>HAPPY GO LUCKY</b><small>GIFT HAPPY · GET LUCKY</small></div>
            <span>03 · PACKAGING STAMP</span>
          </div>
        </div>
        <div className="logo-rules">
          <p><b>DO</b> Keep clear space. Let it feel bold and a little imperfect.</p>
          <p><b>DON’T</b> Stretch it, recolour individual letters or add effects.</p>
          <p><b>REMEMBER</b> It should still charm when stamped crooked or faded.</p>
        </div>
      </section>

      <section className="language" id="application">
        <SectionLabel number="06">Brand language</SectionLabel>
        <h2>Lines worth<br /><em>repeating.</em></h2>
        <div className="slogan-grid">
          {slogans.map((slogan, i) => <div key={slogan} className={i === 0 ? 'featured' : ''}><span>0{i + 1}</span><p>{slogan}</p></div>)}
        </div>
        <div className="phrases">
          <h3>The catchphrase bank</h3>
          {phrases.map(([phrase, use]) => <div key={phrase}><b>{phrase}</b><span>{use}</span></div>)}
        </div>
      </section>

      <section className="packaging">
        <div className="package-copy">
          <SectionLabel number="07">Packed by hand</SectionLabel>
          <h2>The box is part<br />of the gift.</h2>
          <p>Kraft boxes. One-colour ink. A human signature. Simple, affordable touches that make every arrival feel personal.</p>
          <div className="stamp-list">
            <span>HANDLE WITH SMILES</span><span>LUCKY YOU!</span><span>PSST... OPEN ME FIRST</span>
          </div>
        </div>
        <div className="box-visual">
          <div className="box">
            <div className="round-stamp small"><Clover /><b>HAPPY GO LUCKY</b><small>GIFT HAPPY · GET LUCKY</small></div>
            <p>Packed by hand by <u>Vinita</u></p>
          </div>
          <div className="note"><b>Hey Lucky One!</b><p>Someone thinks you’re pretty special. Hope this little surprise makes you grin.</p><strong>Lucky you! ♣</strong></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark"><img src="/happy-go-lucky-logo.png" alt="" /></div>
        <h2>Make someone feel<br /><span>lucky today.</span></h2>
        <div className="machine-links" aria-label="Machine-readable brand book formats">
          <a href={publicAsset('brand-book.md')}>Markdown</a>
          <a href={publicAsset('brand-book.xml')}>XML</a>
          <a href={publicAsset('llms.txt')}>LLMs index</a>
          <a href={publicAsset('llms-full.txt')}>LLMs full</a>
          <a href={publicAsset('brand-book.dxt')}>DXT</a>
          <a href={publicAsset('brand-book-manifest.json')}>JSON manifest</a>
        </div>
        <div className="footer-bottom"><p>HAPPY GO LUCKY © 2026</p><p>Gift happy. Get lucky.</p><p>#UNBOXTHELUCK</p></div>
      </footer>
    </main>
  )
}

export default App
