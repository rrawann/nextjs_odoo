'use client';
// import { FaSistrix } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)
    
    return (
        <div className="relative">
            {/* <div className="absolute top-[50%] right-10 -translate-y-[50%]"><FaSistrix /></div> */}

            <input className="pl-10 w-[100%] p-5 outline-none" type="text" placeholder="Search..." onChange={(e) => {
                handleSearch(e.target.value)
            }}
                defaultValue={searchParams.get('query')?.toString()}
            />

        </div>
    )
}