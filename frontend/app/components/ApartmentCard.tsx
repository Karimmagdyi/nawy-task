interface ApartmentCardProps {
  name: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  developer:string
  project:string
  _id: string
}

export default function ApartmentCard({ name, price, bedrooms, bathrooms, area, images, _id,developer,project }: ApartmentCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer">
  <div className="relative">
    <img src={images?.[0]} alt={name} className="w-full h-56 object-cover" />
    <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full text-gray-700">
      {project}
    </span>
  </div>
  <div className="p-4">
    <h2 className="text-lg font-bold text-gray-900">{name}</h2>
    <h3 className="text-sm text-gray-500 mb-2">{developer}</h3>
    <p className="text-black font-bold text-xl">{price.toLocaleString()} EGP</p>
    <div className="flex gap-4 mt-3 text-sm text-gray-500 border-t pt-3">
      <span>🛏 {bedrooms} Beds</span>
      <span>🚿 {bathrooms} Baths</span>
      <span>📐 {area} m²</span>
    </div>
  </div>
</div>
  )
}
