import axios from "axios";

export const updateNote = async (noteData, userId, noteId) => {
  let config = {
    headers: {
      userId,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/notes/update/${noteId}`,
      JSON.stringify(noteData),
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error in updating note");
  }
};
