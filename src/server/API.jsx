// Import Axios or use Fetch
import axios from "axios";

// Function to create a new task
const createTask = async (taskData) => {
  try {
    const response = await axios.post("/api/tasks", taskData);
    // Handle success (e.g., update Redux store)
  } catch (error) {
    // Handle error
  }
};
