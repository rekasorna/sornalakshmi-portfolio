import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: profile.email },
        { publicKey: PUBLIC_KEY }
      );
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setState('error');
    }
  }

  return (
    <section id="contact" className="px-6 py-16 sm:py-24 bg-cream text-ink relative overflow-hidden min-h-[calc(100vh-65px)]">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-rose" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-rose">05 · Contact</p>
        </div>

        <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-16 items-start">
          {/* Left: info panel */}
          <div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Let's build something&nbsp;
              <span className="text-rose italic">together.</span>
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed max-w-sm">
              Open to Data Analyst and Full Stack roles. Whether it's a project, a collaboration, or just a hello — I'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center text-rose group-hover:bg-rose group-hover:text-ink transition-all duration-300">
                  ✉
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Email</p>
                  <p className="text-sm font-medium group-hover:text-rose transition-colors">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center text-rose group-hover:bg-rose group-hover:text-ink transition-all duration-300">
                  ☎
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Phone</p>
                  <p className="text-sm font-medium group-hover:text-rose transition-colors">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center text-rose">
                  📍
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Location</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-10">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-sm hover:border-rose hover:bg-rose hover:text-ink transition-all duration-300"
              >
                GH
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-sm hover:border-rose hover:bg-rose hover:text-ink transition-all duration-300"
              >
                in
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-sm hover:border-rose hover:bg-rose hover:text-ink transition-all duration-300"
              >
                @
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-ink/10 bg-white/60 backdrop-blur-sm p-8 shadow-sm">
            {state === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Message sent!</h3>
                <p className="text-ink/60 text-sm">Thank you for reaching out. I'll reply soon.</p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-6 font-mono text-xs uppercase tracking-widest text-rose hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-semibold text-xl mb-6">Send a message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink/12 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/10 transition-all placeholder:text-ink/30"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink/12 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/10 transition-all placeholder:text-ink/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    placeholder="What are you building?"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/12 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/10 transition-all placeholder:text-ink/30 resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-xs text-rose font-mono">
                    Couldn't send. Email directly at{' '}
                    <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="w-full py-3.5 rounded-xl bg-rose text-ink font-mono text-xs uppercase tracking-widest font-medium hover:bg-lilac hover:shadow-lg hover:shadow-lilac/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 rounded-full border-2 border-ink/40 border-t-ink animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
