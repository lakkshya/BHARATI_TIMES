import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError(""); // Reset error on successful validation
    alert("Login successful!"); // Replace this with actual authentication logic
  };

  return (
    <div className="flex justify-center items-center bg-white !px-6 !py-10">
      <div className="bg-white shadow-lg rounded-xl !p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600 !mb-6">Sign in to continue</p>

      
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        
        <form className="!space-y-4" onSubmit={handleSubmit}>
         
          <div>
            <label className="block text-gray-700 text-sm font-medium !mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full !px-4 !py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium !mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full !px-4 !py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a className="text-sm text-blue-500 hover:underline" href="#">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold !py-2 rounded-lg transition"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center !my-4">
          <div className="flex-grow !h-px bg-gray-300"></div>
          <span className="!px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow !h-px bg-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex gap-4">
          <button className="flex items-center justify-center w-1/2 bg-red-500 hover:bg-red-600 text-white !py-2 rounded-lg transition">
            <FaGoogle className="!mr-2" /> Google
          </button>
          <button className="flex items-center justify-center w-1/2 bg-blue-700 hover:bg-blue-800 text-white !py-2 rounded-lg transition">
            <FaFacebook className="!mr-2" /> Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm !mt-4">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:underline" href="#">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
