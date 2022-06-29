import axios from "axios";

const ChangingMentor = async (body) => {
  const result = await axios.post(
    "https://assignmentor35.herokuapp.com/assignmentor/modifyMentor",
    body
  );
  return result;
};
export default ChangingMentor;
