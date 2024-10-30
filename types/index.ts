interface hrEmployee {
    id: number;
    name: string;
    avatar_128: string;
    job_title: string;
    work_email: string;
    work_phone: string;
  }

  interface partner {
    id: number;
    name: string;
    avatar_128: string;
    phone: string;
    email: string;
    city: string;
    
  }

interface OdooClient {
  connect: () => Promise<void>;
  searchRead: (model: string, domain?: any) => Promise<any[]>; 
}
