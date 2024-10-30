import Search from "@/components/base/Search";
import Employees from "@/components/hr_employee/employees";
// import { employeeData, searchData } from "./api/hrEmployee/route";
import React, { Suspense } from 'react';

export default async function Home({searchParams}: {searchParams?: { query?: string;}}) {
  // const query = searchParams?.query || "";
  // let data: any[];
  // console.log(query,"query++++++++++++++++++++");
  
  // if (query == "") {
  //   data = await employeeData();
  // } else {
  //   data = await searchData(query);
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Suspense fallback={<div>Loading...</div>}>
        <Search />
        <Employees />
    </Suspense>
</main>
  );
}
