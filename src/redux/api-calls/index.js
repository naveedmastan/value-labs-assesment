import axios from "axios";

const getAboutUsData = () => {
  return axios
    .get("https://ponyipsum.com/api/?type=pony-and-filler")
    .then((response) => response?.data)
    .catch(() => null);
};

export default { getAboutUsData };
