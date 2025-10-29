import React, { useState } from 'react';

function Letter() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Please write something first!");
      return;
    }

    // ✅ Append Priyatamaa signature + app link
    const finalMessage = `${message}\n\n— Sent via Priyatamaa 💌 Application\nhttps://priyatamaa.vercel.app`;
    const encodedMsg = encodeURIComponent(finalMessage);

    const whatsappURL = `https://wa.me/?text=${encodedMsg}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 via-blue-300 to-gray-500 p-6 font-mono">
      <div className="w-full max-w-lg bg-white/20 shadow-lg rounded-2xl p-6 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-center mb-4">
          💌 Write Your Letter
        </h1>

        <textarea
          rows="10"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border h-[50vh] no-scrollbar rounded-lg text-gray-800 font-mono mb-4 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <button
          onClick={handleSend}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition font-mono"
        >
          Send via WhatsApp
        </button>
      </div>

      <footer className="mt-6 text-gray-700 text-sm font-mono">
        © {new Date().getFullYear()} Priyatamaa | Crafted with 💙
      </footer>
    </div>
  );
}

export default Letter;
