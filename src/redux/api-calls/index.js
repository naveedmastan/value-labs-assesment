import axios from "axios";

const getAboutUsData = () => {
  return axios
    .get("https://ponyipsum.com/api/?type=pony-and-filler")
    .then((response) => response?.data)
    .catch(() => null);
};

const getMenuData = (menuType) => {
  return axios
    .get(`http://localhost:4000/data/${menuType}`)
    .then((response) => response?.data)
    .catch(() => null);
};

export default { getAboutUsData, getMenuData };
