import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);

    // Append user question to chat history
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: question },
    ]);

    setQuestion(""); // Clear input field

    try {
      // Temporary loading message
      const loadingMessage = {
        role: "assistant",
        content: "Loading your answer... \n It might take up to 10 seconds",
      };
      setChatHistory((prevChat) => [...prevChat, loadingMessage]);

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB--LO1wAj9RU1TxfDqSGJiK05dl3O8vWg`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      // Update the chat with the response from AI and clear the "loading" text
      setChatHistory((prevChat) => [
        ...prevChat.slice(0, -1), // Remove loading message
        { role: "assistant", content: response.data.candidates[0].content.parts[0].text },
      ]);
    } catch (error) {
      console.log(error);
      setChatHistory((prevChat) => [
        ...prevChat.slice(0, -1), // Remove loading message
        { role: "assistant", content: "Sorry - Something went wrong. Please try again!" },
      ]);
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-gray-100 h-screen p-3 flex flex-col">
      {/* Chat History Section */}
      <div
        className="w-full mx-auto flex-grow flex flex-col space-y-4 p-4 overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar in Firefox
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari, and Edge */
            .w-full::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE and Edge */
            .w-full {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}
        </style>
        {/* Map through chat history */}
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg shadow-md max-w-full ${
              chat.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-100 text-black self-start"
            }`}
            style={{ width: "fit-content", maxWidth: "75%" }}
          >
            <ReactMarkdown className="whitespace-pre-wrap">{chat.content}</ReactMarkdown>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <form
        onSubmit={generateAnswer}
        className="w-full max-w-3xl rounded-2xl mx-auto flex items-center space-x-4 p-4 bg-white shadow-md"
        style={{ zIndex: 10 }}
      >
        <textarea
          className="border border-gray-300 rounded-xl w-full p-3 focus:border-blue-400 focus:shadow-lg transition-all duration-300"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
          rows={1}
          disabled={generatingAnswer}
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "Generating..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default App;
