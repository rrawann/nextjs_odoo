import Odoo  from 'odoo-await';
const options: any = {
    baseUrl: process.env.url_odoo ? process.env.url_odoo : 'https://example.com',
    port: process.env.port_odoo ? parseInt(process.env.port_odoo, 10) : 80,
    db: process.env.db_odoo ? process.env.db_odoo : 'default_db',
    username: process.env.username_odoo ? process.env.username_odoo : 'admin',
    password: process.env.password_odoo ? process.env.password_odoo : 'password',
};


export const odoo: OdooClient = new Odoo(options);
// export const odoo =  new Odoo(options);
