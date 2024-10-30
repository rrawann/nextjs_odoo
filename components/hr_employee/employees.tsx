"use client";
import { useEffect, useState } from "react";
// import { employeeData } from "@/app/api/hrEmployee/route";
import EmployeeCard from "./employeeCard";

export default async function Employees({}) {
//   const query = searchParams?.query || "";
//   let data: any[];
//   console.log(query,"query++++++++++++++++++++");
  
//   if (query == "") {
//     data = await employeeData();
//   } else {
//     data = await searchData(query);
//   }
const [employees, setEmployees] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
    const fetchEmployees = async () => {
        const response = await fetch('/api/hrEmployee'); // This calls the GET route
        
        const data = await response.json();
        setEmployees(data);
    };
    fetchEmployees();
}, []);

const handleSearch = async () => {
    const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ term: searchTerm }),
    });
    const data = await response.json();
    setEmployees(data);
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10 ">
      {employees!.map((item: any) => {
        return (
          <div  key={item.id} className="flex items-center gap-3 shadow-md bg-white rounded select-none cursor-pointer group hover:scale-95 transition-all overflow-hidden">
            <EmployeeCard hrEmpoyee={item} />
          </div>
        );
      })}
    </div>
  );
}

