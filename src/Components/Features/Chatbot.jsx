import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { PromptTemplate } from "langchain/prompts"; // Import the prompt template from Langchain

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  // Single prompt template for academic-related questions
  const promptTemplate = new PromptTemplate({
    template: "Explain this: {question}. Solve this: {question}. What is this: {question}.",
    inputVariables: ["question"],
  });

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... It might take up to 10 seconds");

    try {
      // Apply prompt template to the question
      const formattedQuestion = await promptTemplate.format({ question });
      
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB--LO1wAj9RU1TxfDqSGJiK05dl3O8vWg`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: formattedQuestion }] }],
        },
      });

      // Main content extraction
      const mainContent = response.data.candidates[0].content.parts[0].text;
      
      // If no valid answer, set the fallback message
      if (!mainContent) {
        setAnswer("Sorry, I can't answer that question.");
      } else {
        setAnswer(mainContent);  // Set only the main content
      }

    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
      <form
        onSubmit={generateAnswer}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
      >
        <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">
          Academic Chatbot
        </h1>
        <textarea
          required
          className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything academic-related"
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={generatingAnswer}
        >
          Generate answer
        </button>
      </form>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105">
        <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Chatbot;
