import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-rose text-ink flex items-center justify-center shadow-lg shadow-rose/25 hover:bg-lilac hover:shadow-lilac/25 transition-all duration-300 hover:-translate-y-1"
    >
      ↑
    </button>
  ) : null;
}
