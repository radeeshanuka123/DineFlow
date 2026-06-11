import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

function EditFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    available: true,
  });

  useEffect(() => {
    const fetchFood = async () => {
      const foodRef = doc(db, "foods", id);
      const snapshot = await getDoc(foodRef);

      if (snapshot.exists()) {
        setFormData(snapshot.data());
      }
    };

    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "foods", id), {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      imageUrl: formData.imageUrl,
      available: formData.available,
      updatedAt: new Date(),
    });

    navigate("/admin/foods");
  };

  return (
    <div>
      <h1>Update Food</h1>

      <div className="form-box admin-form-box">
        <form onSubmit={handleSubmit}>
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt={formData.name}
              className="form-preview-img"
            />
          )}

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
            placeholder="Category"
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

          <button type="submit">Update Food</button>
        </form>
      </div>
    </div>
  );
}

export default EditFood;