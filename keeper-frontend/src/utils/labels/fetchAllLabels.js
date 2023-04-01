import axios from "axios";

export const fetchAllLabels = async (id) => {
  let config = {
    headers: {
      userId: id,
      "Content-Type": "application/json",
    },
  };

  //   console.log(id);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/labels/all`,

      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
