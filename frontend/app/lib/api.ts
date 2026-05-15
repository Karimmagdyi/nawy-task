export async function getApartments(
  search?: string,
  page: number = 1
) {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  params.append("page", String(page));
  params.append("limit", "6");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/apartment?${params.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
}

export async function getApartmentById(id:string){
  const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartment/${id}`)
  const data=await res.json()
  return data
}

export async function getSimilarApartments(project: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartment?project=${project}`)
  const data = await res.json()
  return data
}