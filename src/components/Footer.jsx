import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-lg font-black text-on-background">DevPortfolio</span>
        <p className="text-sm font-medium text-on-surface-variant">© 2024 Developer Portfolio. Built with Precision.</p>
        <div className="flex gap-8">
          <Link href="#" prefetch={false} scroll={false} className="text-slate-500 hover:text-primary hover:underline transition-all font-medium">LinkedIn</Link>
          <Link href="#" prefetch={false} scroll={false} className="text-slate-500 hover:text-primary hover:underline transition-all font-medium">GitHub</Link>
          <Link href="#" prefetch={false} scroll={false} className="text-slate-500 hover:text-primary hover:underline transition-all font-medium">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}
