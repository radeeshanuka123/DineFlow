import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

function AddFood() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "foods"), {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      imageUrl: formData.imageUrl,
      available: formData.available,
      createdAt: new Date(),
    });

    navigate("/admin/foods");
  };

  return (
    <div>
      <h1>Add Food</h1>

      <div className="form-box admin-form-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Food Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category e.g. Burgers, Rice, Drinks"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Paste Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
            Available
          </label>

          <button type="submit">Save Food</button>
        </form>
      </div>
    </div>
  );
}

export default AddFood;