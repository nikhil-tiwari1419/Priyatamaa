import React, { useState } from 'react'

function Letter() {
    const [message, setMessage] = useState("");


    const handleSend = () => {
        if (!message.trim()) {
            alert("Please write something first!");
            return;
        }
        // WhatsApp share URL (you can replace with messenger/mailto etc.)
        const encodedMsg = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/?text=${encodedMsg}`;

        window.open(whatsappURL, "_blank"); // opens WhatsApp with message
    }
    return (
        <div className="min-h-screen flex flex-col  bg-gradient-to-br from-pink-100 to-blue-100 p-6">
            <div className="w-full max-w-lg bg-white  shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl font-bold text-center mb-4">
                    💌 Write Your Letter
                </h1>

                <textarea
                    rows="10"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 border h-[50vh] no-scrollbar rounded-lg text-gray-800 font-serif mb-4 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <button
                    onClick={handleSend}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Send via WhatsApp
                </button>
            </div>

            <footer className="mt-6 text-gray-500 text-sm">
                © {new Date().getFullYear()} Priyataama | Crafted with 💙
            </footer>
        </div>
    )
}

export default Letter