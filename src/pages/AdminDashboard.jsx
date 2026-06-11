import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import { db, storage } from "../firebase";

function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    available: true
  });

  const fetchFoods = async () => {
    const querySnapshot = await getDocs(collection(db, "foods"));

    const foodList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setFoods(foodList);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const uploadImage = async () => {
    if (!imageFile) {
      return formData.imageUrl;
    }

    const imageRef = ref(
      storage,
      `foods/${Date.now()}-${imageFile.name}`
    );

    await uploadBytes(imageRef, imageFile);

    const downloadURL = await getDownloadURL(imageRef);

    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalImageUrl = await uploadImage();

    const foodData = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      category: formData.category,
      imageUrl: finalImageUrl,
      available: formData.available
    };

    if (editId) {
      await updateDoc(doc(db, "foods", editId), foodData);
      setEditId(null);
    } else {
      await addDoc(collection(db, "foods"), foodData);
    }

    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      imageUrl: "",
      available: true
    });

    setImageFile(null);
    fetchFoods();
  };

  const handleEdit = (food) => {
    setEditId(food.id);

    setFormData({
      name: food.name || "",
      description: food.description || "",
      price: food.price || "",
      category: food.category || "",
      imageUrl: food.imageUrl || "",
      available: food.available ?? true
    });

    setImageFile(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "foods", id));
    fetchFoods();
  };

  return (
    <div className="container">
      <h1 className="page-title">Admin Dashboard</h1>
      <p className="page-subtitle">Manage restaurant foods from Firebase</p>

      <div className="admin-layout">
        <div className="form-box">
          <h2>{editId ? "Update Food" : "Add Food"}</h2>

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
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL optional"
              value={formData.imageUrl}
              onChange={handleChange}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  marginBottom: "15px"
                }}
              />
            )}

            <label>
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
                style={{ width: "auto", marginRight: "8px" }}
              />
              Available
            </label>

            <br />
            <br />

            <button type="submit">
              {editId ? "Update Food" : "Add Food"}
            </button>
          </form>
        </div>

        <div className="admin-list">
          <h2>Food List</h2>

          {foods.map((food) => (
            <div key={food.id} className="food-card">
              {food.imageUrl && (
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    marginBottom: "15px"
                  }}
                />
              )}

              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p>Category: {food.category}</p>
              <p className="price">Rs. {food.price}</p>

              <span className={food.available ? "status" : "status not"}>
                {food.available ? "Available" : "Not Available"}
              </span>

              <br />
              <br />

              <div className="action-row">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEdit(food)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDelete(food.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;