import { NextResponse } from 'next/server';
import { partnerData, searchDataPartner } from '@/lib/odoo_handler'; 

export async function GET(request: Request) {
    try {
        const partners = await partnerData();
        return NextResponse.json(partners);
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return NextResponse.json({ message: 'Failed to fetch employee data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { term } = await request.json(); 
        const results = await searchDataPartner(term);
        return NextResponse.json(results);
    } catch (error) {
        console.error('Error searching employee data:', error);
        return NextResponse.json({ message: 'Failed to search employee data' }, { status: 500 });
    }
}