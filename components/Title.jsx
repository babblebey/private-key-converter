export function Title({ children }) {
  return (
    <h1 className="py-4 text-5xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
      {children}
    </h1>
  );
};