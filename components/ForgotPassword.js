import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md border-4 shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Password Resert
        </h1>
        {error && <div
          class="bg-purple-100 border-t border-l-4 border-b border-red-500 text-blue-700 px-4 py-3"
          role="alert"
        ><p class="text-sm">{error}</p>
        </div>}
        {message && <div
          class="bg-purple-100 border-t border-l-4 border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        ><p class="text-sm">{message}</p>
        </div>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              ref={emailRef}
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Resert Password
            </button>
          </div>
          <div className="mt-8  text-center text-purple-700">
            <Link
              to="/"
              className=" underline text-2lg font-bold  hover:no-underline"
            >
              log in.
            </Link>
          </div>
        </form>

        <p className="mt-8 text-xs font-normal text-center text-purple-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/signup"
            className=" underline font-medium text-sm  hover:no-underline"
          >
            Sign up.
          </Link>
        </p>
      </div>
    </div>
  );
}
