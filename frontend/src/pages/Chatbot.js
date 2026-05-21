import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Chatbot({
    darkMode,
    toggleTheme
}) {

    const [message, setMessage]
    = useState("");

    const [chat, setChat]
    = useState([]);


    const sendMessage = async () => {

        if (!message) return;

        const userMessage = {
            sender: "user",
            text: message
        };

        setChat((prev) => [
            ...prev,
            userMessage
        ]);

        try {

            const res = await axios.post(

                "http://localhost:5000/api/chat",

                { message }
            );

            const botMessage = {

                sender: "bot",

                text: res.data.reply
            };

            setChat((prev) => [
                ...prev,
                botMessage
            ]);

            setMessage("");

        } catch (error) {

            console.log(error);

            alert("AI Error");
        }
    };


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />

                <div className="container mt-4">

                    <div className="custom-card p-4">

                        <h2 className="mb-4">
                            🤖 AI Pet Assistant
                        </h2>


                        <div className="chat-box">

                            {
                                chat.map((msg, index) => (

                                    <div
                                        key={index}

                                        className={
                                            msg.sender === "user"
                                            ? "user-msg"
                                            : "bot-msg"
                                        }
                                    >

                                        {msg.text}

                                    </div>
                                ))
                            }

                        </div>


                        <div className="d-flex mt-3">

                            <input
                                type="text"

                                placeholder="Ask about pet care..."

                                className="form-control"

                                value={message}

                                onChange={(e) =>
                                    setMessage(
                                        e.target.value
                                    )
                                }
                            />

                            <button
                                className="btn btn-custom ms-2"

                                onClick={sendMessage}
                            >
                                Send
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default Chatbot;