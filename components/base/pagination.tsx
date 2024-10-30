import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export function CustomPagination({
  items,
  pageSize,
  currentPage,
  onPageChange,

}: {
  items: any;
  pageSize: any;
  currentPage: any;
  onPageChange: any;

}) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const nextPage = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPagee = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="p-4 flex items-center flex-wrap justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`h-8 px-2 bg-[#9ca3af] text-gray-600 rounded-full focus:shadow-outline hover:bg-gray-100 
               `}
              onClick={() => prevPagee()}
            />
          </PaginationItem>

          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink key={page} onClick={() => onPageChange(page)}>
                <span
                  className={`${
                    page === currentPage
                      ? "bg-[#174862] text-white"
                      : "bg-gray-100"
                  } h-8 px-3 rounded-full flex justify-center pt-1 border border-[#174862] hover:bg-[#174862] hover:text-white 
                  `}
                >
                  {page}
                </span>
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className={`h-8 px-2 bg-[#9ca3af] text-gray-600  rounded-full focus:shadow-outline hover:bg-gray-100
                 `}
              onClick={() => nextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export const paginate = (items: any, pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items?.slice(startIndex, startIndex + pageSize);
};