import axios from "axios";

const ListAll = async () => {
  const mentor = await axios.get("https://assignmentor35.herokuapp.com/mentor");
  const student = await axios.get(
    "https://assignmentor35.herokuapp.com/student"
  );
  const result = {
    mentor: mentor.data,
    student: student.data,
  };

  return result;
};

export default ListAll;
