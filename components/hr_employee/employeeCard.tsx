// import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default async function EmployeeCard({ hrEmpoyee }: { hrEmpoyee: hrEmployee }) {
  return (
<>      <div className="flex-shrink-0">
        <img
          className="group-hover:opacity-70 "
          alt=""
          src={`data:image/jpeg;base64,${hrEmpoyee.avatar_128}`}
        />
      </div>
      <div className="min-w-0">
        <p className="font-bold">{hrEmpoyee.name}</p>
        <p className="text-sm mb-3 truncate">{hrEmpoyee.job_title}</p>
        <div className="flex items-center ">
          <div className="flex-shrink-0 mr-2">
            {/* <FaEnvelope className="text-purple-700" /> */}
          </div>
          <div className="truncate">{hrEmpoyee.work_email}</div>
        </div>
        <div className="flex items-center gap-3">
          {/* <FaPhone className="text-purple-700" /> */}
          <div className="truncate">{hrEmpoyee.work_phone}</div>
        </div>
      </div>
   </>
  );
}
