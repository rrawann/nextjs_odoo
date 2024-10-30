// import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function PartnerCard({ partner }: { partner: partner }) {
    return (
  <>      <div className="flex-shrink-0">
          <img
            className="group-hover:opacity-70 "
            alt=""
            src={`data:image/jpeg;base64,${partner.avatar_128}`}
          />
        </div>
        <div className="min-w-0">
          <p className="font-bold">{partner.name}</p>
          <p className="text-sm mb-3 truncate">{partner.email}</p>
          <div className="flex items-center ">
            <div className="flex-shrink-0 mr-2">
              {/* <FaEnvelope className="text-purple-700" /> */}
            </div>
            <div className="truncate">{partner.phone}</div>
          </div>
          <div className="flex items-center gap-3">
            {/* <FaPhone className="text-purple-700" /> */}
            <div className="truncate">{partner.city}</div>
          </div>
        </div>
     </>
    );
  }
  