
import { GoogleGenerativeAI } from "@google/generative-ai";  // Import Google Generative AI
import { OPEN_AI } from "./constants";


// Initialize Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(OPEN_AI);

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



// Export genAI and model for use in other files
 


export default model;
