import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(
    `https://assignmentor35.herokuapp.com/mentor/${mentorID}`
  );
  return result.data;
};
export default ListMentor;
