"use client";
import React, { useState } from "react";

const Page = () => {
  const [oldURL, setOldURL] = useState("");
  const [newURL, setNewURL] = useState("");
  const [generatedURL, setGeneratedURL] = useState("");
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true)
    if (oldURL.length === 0 || newURL.length === 0) {
      setError("fields are empty.");
      setLoading(false)
      return;
    }

    try {
      new URL(oldURL)
    } catch (error) {
      console.log(error)
      setError("Invalid original URL format.");
      setLoading(false)
      return;
    }

    const isValidAlias = /^[a-zA-Z0-9_-]{3,20}$/.test(newURL);
    if (newURL.includes(" ")) {
      setError("URLs can't contain spaces.");
      setLoading(false)
      return;
    }
    if (!isValidAlias) {
      setError("Short URL should be 3-20 characters and alphanumeric.");
      setLoading(false)
      return;
    }


    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: oldURL,
          shorturl: newURL,
        }),
      });

      const data = await res.json();
      console.log("response from api", data);
      if (data.success) {
        setGeneratedURL(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/${newURL}`)
        alert(`Short URL created successfully!`);
        setOldURL("");
        setNewURL("");

      }
      else {
        alert(`Error: ${data.message}`);
      }



    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong");

    }
    finally {
      setLoading(false);
    }

  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-[#2f2d2d87]  bg-opacity-40 z-50 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="h-[95vh] flex items-center justify-center bg-[#f9fafb] px-4">
        <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-2xl space-y-6">
          <h1 className="text-3xl font-bold text-center text-[#033f47]">
            Generate your short URLs
          </h1>

          <div className="flex flex-col space-y-4">
            <label className="text-gray-700 font-semibold">Original URL</label>
            <input
              type="text"
              value={oldURL}
              onChange={(e) => {
                setOldURL(e.target.value)
                setError("")
              }}
              placeholder="https://example.com/very/long/url"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <label className="text-gray-700 font-semibold">Shortened URL</label>
            <input
              type="text"
              value={newURL}
              onChange={(e) => {
                setNewURL(e.target.value)
                setError("")
              }}
              placeholder="https://bitlinks.com/abc123"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div className="text-center">
            <button className="mt-4 px-6 py-2 bg-yellow-300 hover:bg-yellow-400 text-[#033f47] font-semibold rounded-lg shadow cursor-pointer" onClick={handleClick}>
              Shorten URL
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-center font-medium mt-2">
              {error}
            </p>
          )}

          <div>
            {generatedURL && (
              <div className="text-center mt-4">
                <p className="text-green-700 font-medium">
                  Your short URL:{" "}
                  <a
                    href={generatedURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    {generatedURL}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
