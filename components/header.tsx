export default function Header() {
  return (
    <header className="h-14 bg-red-400 border border-black px-8 flex items-center gap-12">
      <div className="w-20 h-6 bg-gray-200 border border-black flex items-center justify-center text-xs">
        Logo
      </div>

      <input
        className="w-64 h-6 bg-gray-200 border border-black px-2 text-sm"
        placeholder="Search..."
      />

      <input
        className="w-80 h-6 bg-gray-200 border border-black px-2 text-sm ml-auto"
        placeholder="Extra input..."
      />
    </header>
  );
}