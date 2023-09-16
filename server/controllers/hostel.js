import { Hostel } from "../data/index.js";
export const getHostels = (req, res) => {
  try {
    res.send({ data: Hostel });
  } catch (err) {
    console.log(err);
    res.send(500).json({ msg: `err ${err.message}` });
  }
};
