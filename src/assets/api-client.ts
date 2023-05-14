import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c63d526c5ae7428ea0cb35d7e1f72f14",
  },
});
