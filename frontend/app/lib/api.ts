export async function getApartments(search?: string, page: number = 1) {
  try {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    params.append("page", String(page));
    params.append("limit", "6");

    const url = `${process.env.NEXT_PUBLIC_API_URL}/apartment?${params.toString()}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();

  } catch (error) {
    console.error("getApartments error:", error);
    return { data: [], currentPage: 1, totalPages: 0 };
  }
}

export async function getApartmentById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartment/${id}`);

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();

  } catch (error) {
    console.error("getApartmentById error:", error);
    return null;
  }
}

export async function getSimilarApartments(project: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/apartment?project=${project}&limit=4`
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();

  } catch (error) {
    console.error("getSimilarApartments error:", error);
    return { data: [] };
  }
}