import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Address = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.firstName === "") {
      newErrors.firstName = "First name is required";
    }

    if (formData.lastName === "") {
      newErrors.lastName = "Last name is required";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.address === "") {
      newErrors.address = "Address is required";
    }

    if (formData.city === "") {
      newErrors.city = "City is required";
    }

    if (formData.state === "") {
      newErrors.state = "State is required";
    }

    if (formData.country === "") {
      newErrors.country = "Country is required";
    }

    if (formData.zip === "") {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{6}$/.test(formData.zip)) {
      newErrors.zip = "ZIP code must be 6 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/payment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[#111827] mb-6">
          Shipping Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First & Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-red-500 text-sm">{errors.phone}</p>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House No, Street Name"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-red-500 text-sm">{errors.address}</p>
          </div>

          {/* City & State */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.city}</p>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Maharashtra"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.state}</p>
            </div>
          </div>

          {/* Country & Zip */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.country}</p>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="416416"
                className="w-full border rounded-lg px-4 py-3"
              />
              <p className="text-red-500 text-sm">{errors.zip}</p>
            </div>
          </div>

          <Button text="Continue to payment" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Address;