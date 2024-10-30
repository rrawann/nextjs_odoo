import { odoo } from "@/config/odoo";

export const employeeData = async () => {
    await odoo.connect();
    return await odoo.searchRead(`hr.employee`);

};

export const searchData = async (term: string) => {
    await odoo.connect();
    return await odoo.searchRead("hr.employee", ["name", "ilike", `%${term}%`]);
}

export const partnerData = async () => {
    await odoo.connect();
    return await odoo.searchRead(`res.partner`);

};

export const searchDataPartner = async (term: any) => {
    await odoo.connect();
    return await odoo.searchRead("res.partner", ["name", "ilike", `%${term}%`]);
}