 import Button from "../components/Button";
 import { useNavigate } from "react-router-dom";
 
 const Address =  ()=> {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        
        <h2 className="text-2xl font-bold text-[#111827] mb-6">
          Shipping Address
        </h2>

        <form className="space-y-5">
          
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-[#6b7280] mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-[#6b7280] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-[#6b7280] mb-2">
              Street Address
            </label>
            <input
              type="text"
              placeholder="House No, Street Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
            />
          </div>

          {/* City State */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Mumbai"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                State
              </label>
              <input
                type="text"
                placeholder="Maharashtra"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>
          </div>

          {/* Country & Zip */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="India"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#6b7280] mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="416416"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>
          </div>

          {/* Button */}
          <Button
                text="Continue to payment"
                onClick={() => navigate("/orderSuccess")}
              />

        </form>
      </div>
    </div>
  );
}


export default Address;