"use client";
import { useEffect, useState } from "react";
import { CustomPagination, paginate } from "../base/pagination";
import PartnerCard from "./partnerCard";
export default function GetPartners({} ) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const fetchEmployees = async () => {
          const response = await fetch('/api/partners'); // This calls the GET route
          const data = await response.json();
          setPartners(data);
      };
      fetchEmployees();
  }, []);

  const handleSearch = async () => {
      const response = await fetch('/api/partners', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ term: searchTerm }),
      });
      const data = await response.json();
      setPartners(data);
  };
  const paginatedPartners = paginate(partners, currentPage, pageSize);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10 ">
      {paginatedPartners!.map((item: any) => {
        return (
          <div  key={item.id} className="flex items-center gap-3 shadow-md bg-white rounded select-none cursor-pointer group hover:scale-95 transition-all overflow-hidden">
            <PartnerCard partner={item} />
          </div>
        );
      })}
    </div>
        <div  className="flex justify-center pt-10  pb-10">
        <CustomPagination
          items={partners?.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        

        />
      </div>
    </>
  );
}
