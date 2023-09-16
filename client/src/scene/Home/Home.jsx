import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../states";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Feed from "../AppSection/Feed/Feed";
export default function Home() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <>
      <Navbar />
      <Feed />
    </>
  );
}
