export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-page flex-col gap-1 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
      <p>&copy; {new Date().getFullYear()} Renato Mission</p>
      <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
    </footer>
  );
}
