"use client"
// import { setegid } from "process";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          useremail: email,
          usermessage: message,
        }),
      });

      const data = await res.json()
      console.log("response from api", data);
      if (data.success) {
        alert(`Thank you for reaching out to us!\nOur team will get back to you within 24–48 hours`);
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      }
      else {
        setError(data.message || "Something went wrong.");
      }

    } catch (error) {
      console.log("error in subbmiting the form", error)
      setError("Something went wrong. Try again later.");
      return;
    }
  }
  return (
    <main className="h-[90vh] bg-[#f9fafb] flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-[#033f47]">Contact Us</h1>
        <p className="text-center text-gray-600 text-lg">
          Got a question, feedback, or just want to say hello? We'd love to hear from you.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError("")
              }}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              //   rows="5"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                setError("")
              }}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-300 text-[#033f47] font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-600 text-center font-medium mt-2">
            {error}
          </p>
        )}


        <p className="text-center text-sm text-gray-400 pt-4">
          We usually respond within 24–48 hours.
        </p>
      </section>
    </main>
  );
};

export default ContactPage;
