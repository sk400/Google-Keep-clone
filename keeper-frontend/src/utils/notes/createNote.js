import axios from "axios";

// const baseUrl = process.env.BASE_URL;

export const createNote = async (noteData, config) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/notes/add`,
      JSON.stringify(noteData),
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating note");
  }
};
