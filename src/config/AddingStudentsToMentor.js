import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(
    "https://assignmentor35.herokuapp.com/assignmentor/newMentor",
    body
  );
  return result;
};

export default AddingStudentsToMentor;
