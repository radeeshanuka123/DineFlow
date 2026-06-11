import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

function Foods() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const fetchFoods = async () => {
    const snapshot = await getDocs(collection(db, "foods"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this food?");

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "foods", id));
    fetchFoods();
  };

  const filteredFoods = foods.filter((food) =>
    food.name?.toLowerCase().includes(search.toLowerCase())
  );

  const groupedFoods = filteredFoods.reduce((groups, food) => {
    const category = food.category || "Uncategorized";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(food);
    return groups;
  }, {});

  return (
    <div>
      <div className="admin-header-row">
        <div>
          <h1>Foods</h1>
          <p>Manage foods by category</p>
        </div>

        <Link to="/admin/foods/add" className="admin-add-btn">
          + Add Food
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search foods..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {Object.keys(groupedFoods).length === 0 ? (
        <p>No foods available.</p>
      ) : (
        Object.keys(groupedFoods)
          .sort()
          .map((category) => (
            <div key={category} className="category-section">
              <h2>
                {category}
                <span className="category-count">
                  ({groupedFoods[category].length})
                </span>
              </h2>

              <div className="admin-food-grid">
                {groupedFoods[category].map((food) => (
                  <div key={food.id} className="admin-food-card">
                    <img
                      src={
                        food.imageUrl ||
                        "https://via.placeholder.com/300x200?text=No+Image"
                      }
                      alt={food.name}
                      className="food-image"
                    />

                    <div className="food-card-top">
                      <h3>{food.name}</h3>

                      <span className={food.available ? "status" : "status not"}>
                        {food.available ? "Available" : "Unavailable"}
                      </span>
                    </div>

                    <p>{food.description}</p>

                    <div className="food-footer">
                      <strong>Rs. {food.price}</strong>
                    </div>

                    <div className="action-row">
                      <Link
                        to={`/admin/foods/edit/${food.id}`}
                        className="small-btn edit-link"
                      >
                        Update
                      </Link>

                      <button
                        className="small-btn delete-btn"
                        onClick={() => handleDelete(food.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default Foods;