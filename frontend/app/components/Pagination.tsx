import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  search?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  search,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        const query = new URLSearchParams();

        if (search) {
          query.set("search", search);
        }

        query.set("page", String(page));

        return (
          <Link
            key={page}
            href={`/?${query.toString()}`}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              page === currentPage
                ? "border-[#00A6A6] bg-[#00A6A6] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}