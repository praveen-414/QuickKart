import React, { useRef, useState } from "react";
import Button from "../components/Button";
import toast from "react-hot-toast";

const Account = () => {
  const [accBtn, setAccBtn] = useState("Login");
  const form = useRef();

  const validateForm = ({ fullName, email, password, confirmPassword }) => {
    if (!fullName.trim()) {
      return "Full name is required";
    }

    if (fullName.trim().length < 3) {
      return "Full name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      return "Email is required";
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    if (!password.trim()) {
      return "Password is required";
    }
    if (password != confirmPassword) {
      return "Passwords doesn't match";
    }

    return null; // No errors
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = {
      fullName: form.current.fullName.value,
      email: form.current.email.value,
      password: form.current.password.value,
      confirmPassword: form.current.confirmPassword.value,
    };

    const error = validateForm(formData);

    if (error) {
      toast.error(error);
      return;
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 items-center justify-center text-white p-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

            <p className="text-lg opacity-90">
              Discover amazing products and shop your favorites with ease.
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="shopping"
              className="w-40 mx-auto"
            />

            <p className="text-sm opacity-80">
              Join thousands of happy shoppers today!
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {accBtn === "Login" ? "Create Account" : "Login"}
          </h2>

          <form
          ref={form}
            key={accBtn}
            onSubmit={handleSignUp}
            className="flex flex-col gap-4"
          >
            {accBtn === "Login" ? (
              <>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <Button
                  text="Sign Up"
                  type="submit"
                  className="hover:bg-transparent"
                />

                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setAccBtn("Sign Up")}
                  >
                    Login
                  </span>
                </p>
              </>
            ) : (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="border p-3 rounded-md outline-none focus:ring focus:ring-[var(--primary)]"
                />

                <Button
                  type="submit"
                  text="Login"
                  className="hover:bg-transparent"
                />

                <p className="text-center text-sm">
                  Don't have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setAccBtn("Login")}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
