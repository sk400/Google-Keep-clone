import axios from "axios";

export const updateLabel = async (labelData, userId, labelId) => {
  let config = {
    headers: {
      userId,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/labels/update/${labelId}`,
      JSON.stringify(labelData),
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error in updating label");
  }
};
