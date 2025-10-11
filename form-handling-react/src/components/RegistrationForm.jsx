import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    

    setFormData({
        ...formData,
        [name]: value,
    });
  };

    const validate = () => {
        const newErrors = {};

        if (!formData.username.trim()) newErrors.username = "Username is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.password.trim()) newErrors.password = "Password is required.";


        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };


    return (
        <div className="nax-w-md mx auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">User Resgistration</h2>

            {submitted && (
                <p classNmae="text-green-600 text-center mb-4">
                    Registration successful!

                </p>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
                    >
                    Register
                    </button>
            </form>

        </div>
);
}