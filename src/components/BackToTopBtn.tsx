import { ArrowUp } from 'lucide-react';

function BackToTopBtn() {
  return (
    <button
      className="fixed bottom-10 right-10 bg-blue-zombie text-white p-4 rounded-md shadow-md cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default BackToTopBtn;
