import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC8cCBbbLewK6FysOfhiynH2F4P_MVToaA`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `Generate a recipe using the following ingredients: ${ingredients}. The recipe should be for ${servingSize} servings.The format of the response should be :
                  RECIPE NAME 
                  line space 
                  Ingridients:
                  List of ingridients
                  line space
                  Recipe :
                  Detailed Recipe
                  line space
                  Facts and tips
                  `,
                },
              ],
            },
          ],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="w-full px-4 lg:px-20 pt-5">
      <form onSubmit={generateAnswer} className="flex flex-col gap-4">
        <h1 className="text-3xl text-orange-500 underline mb-4">Recipe Generator</h1>
        <textarea
          required
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma-separated)"
        ></textarea>
        <input
          required
          type="number"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={servingSize}
          onChange={(e) => setServingSize(e.target.value)}
          placeholder="Enter serving size"
        />
        <button
          type="submit"
          className={`w-full py-2 bg-${generatingAnswer ? 'gray' : 'orange'}-500 text-white rounded hover:bg-${generatingAnswer ? 'gray' : 'orange'}-700`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? 'Generating...' : 'Generate Recipe'}
        </button>
      </form>
      <div className="w-full mt-10 p-4 bg-gray-900 rounded">
        <h2 className="text-lg text-orange-500 mb-4">Generated Recipe</h2>
        <div className="text-white">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;

