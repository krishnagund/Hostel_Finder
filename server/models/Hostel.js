import mongoose from "mongoose";
const HostelSchema = new mongoose.Schema({
  hostelName: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  address: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  contact: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
  },
  rent: {
    type: Map,
    default: {},
  },
});

const Hostel = mongoose.model("Hostel", HostelSchema);
export default Hostel;
