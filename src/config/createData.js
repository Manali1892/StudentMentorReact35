import axios from "axios";

const createData = async (type, body) => {
  const result = await axios.post(
    `https://assignmentor35.herokuapp.com/${type}`,
    body
  );
  return result;
};

export default createData;