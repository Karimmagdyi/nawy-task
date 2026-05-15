import { getApartments } from "./lib/api";
import ApartmentCard from "./components/ApartmentCard";
import Navbar from "./components/Navbar";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Pagination from "./components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>;
}) {
  const apartments = await getApartments(
    (await searchParams).search,
    Number((await searchParams).page) || 1,
  );
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-black">Apartments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.data.map((apartment: any) => (
            <Link key={apartment._id} href={`apartments/${apartment._id}`}>
              <ApartmentCard {...apartment} />
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={apartments.currentPage}
          totalPages={apartments.totalPages}
          search={(await searchParams).search}
        />
      </main>
    </>
  );
}
