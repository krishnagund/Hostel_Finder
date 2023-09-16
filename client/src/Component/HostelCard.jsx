import "./HostelCard.css";
import { GrMapLocation } from "react-icons/all";
import { GrContactInfo } from "react-icons/all";
import { MdOutlineCurrencyRupee } from "react-icons/all";
import { RiCommunityLine } from "react-icons/ri";
export default function HostelCard({ hostel }) {
  return (
    <div className="card">
      <div className="image">
        <img src={"public/firstphoto.jpg"} />
      </div>
      <div className="content">
        <div className="title">
          <h1>{hostel.hostelName}</h1>
        </div>
        <div className="contact">
          <div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <GrMapLocation />
              Address:
            </div>
            <p>{hostel.address}</p>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <GrContactInfo />
              Contact Number
            </div>
            <p>{hostel.contact}</p>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <MdOutlineCurrencyRupee fill="#89b4fa" />
              Rent :<p>{hostel.rent}</p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <RiCommunityLine fill="#89b4fa" />
              Available Room :<p>{hostel.available}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
