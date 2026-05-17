"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (!search.trim()) {
      router.push("/");
      return;
    }

    router.replace(`/?search=${encodeURIComponent(search)}`);
  };
  const handleClearSearch = () => {
    setSearch("");
    router.push("/");
  };
  return (
    <>
      <section className="relative h-[55vh] rounded-b-[40px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>

          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Discover luxury apartments in Egypt’s top compounds.
          </p>

          <div className="mt-8 flex w-full max-w-2xl items-center gap-3 rounded-full bg-white/95 p-2 shadow-xl backdrop-blur">
            <div className="flex flex-1 items-center gap-3 px-4">
              <span className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search by unit name, unit number, or project..."
                className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e)=>{if(e.key=='Enter') handleSearch()}}
              />
            </div>

            <button
              onClick={handleSearch}
              className="rounded-full bg-[#00A6A6] px-6 py-3 font-semibold text-white transition hover:bg-[#008f8f]"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              className="rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-300"
            >
              Clear
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
