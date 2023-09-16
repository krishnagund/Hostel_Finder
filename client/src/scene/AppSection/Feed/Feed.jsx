import { useEffect, useState } from "react";
import HostelCard from "../../../Component/HostelCard";
import "./Feed.css";
import { useSelector } from "react-redux";
export default function Feed() {
  const search = useSelector((state) => state.search);
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const hostels = fetch("http://localhost:3001/hostel/getHostels")
      .then((res) => res.json())
      .then((data) => setHostels(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(hostels);
  return (
    <div className="feed">
      {hostels.map((item, i) => {
        if (item.hostelName.includes(search)) {
          return <HostelCard hostel={item} key={i} />;
        }
      })}
    </div>
  );
}
