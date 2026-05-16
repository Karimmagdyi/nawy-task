import { getApartmentById, getSimilarApartments } from "@/app/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ApartmentDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data:apartment } = await getApartmentById(id);

  if(!apartment){
    notFound()
  }
  const { data: similarApartments } = await getSimilarApartments(apartment.project);
  

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-900">{apartment.name}</span>
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-lg mb-5">
        <img
          src={apartment.images[0]}
          alt={apartment.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left - About */}
        <div>
          <h2 className="text-lg font-bold mb-2 text-black">
            About this property
          </h2>
          <p className="text-black leading-relaxed">{apartment.description}</p>
        </div>

        {/* Right - Info */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex gap-2 mb-3">
            <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
              {apartment.project}
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              {apartment.developer}
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-1 text-black">{apartment.name}</h1>
          <p className="text-black text-2xl font-bold mb-4">
            {apartment.price.toLocaleString()} EGP
          </p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gray-50 text-black rounded-xl p-3 text-center">
              <p className="text-xl">🛏</p>
              <p className="text-sm font-semibold mt-1">{apartment.bedrooms} Beds</p>
            </div>
            <div className="bg-gray-50 text-black rounded-xl p-3 text-center">
              <p className="text-xl">🚿</p>
              <p className="text-sm font-semibold mt-1">
                {apartment.bathrooms} Baths
              </p>
            </div>
            <div className="bg-gray-50 text-black rounded-xl p-3 text-center">
              <p className="text-xl">📐</p>
              <p className="text-sm font-semibold mt-1">{apartment.area} m²</p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-black">Unit number</span>
              <span className="font-semibold text-black">
                {apartment.unitNumber}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-black">Developer</span>
              <span className="font-semibold text-black">{apartment.developer}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-black">Project</span>
              <span className="font-semibold text-black">{apartment.project}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Apartments */}
      {similarApartments?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">
            Similar Apartments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarApartments
              .filter((apt: any) => apt._id !== id)
              .slice(0, 3)
              .map((apt: any) => (
                <Link href={`/apartments/${apt._id}`} key={apt._id}>
                  <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={apt.images[0]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900">
                        {apt.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {apt.developer}
                      </p>
                      <p className="text-black font-bold">
                        {apt.price.toLocaleString()} EGP
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
