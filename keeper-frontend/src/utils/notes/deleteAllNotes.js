import axios from "axios";

export const deleteAllNotes = async (userId) => {
  let config = {
    headers: {
      userId,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/notes/delete`,

      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error in deleting all notes.");
  }
};
