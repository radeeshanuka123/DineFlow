import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

function Foods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const snapshot = await getDocs(collection(db, "foods"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFoods(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if (loading) {
    return <h2 className="loading-text">Loading foods...</h2>;
  }

  return (
    <div className="foods-page">
      <div className="foods-header">
        <h1>Our Menu</h1>
        <p>Explore freshly prepared meals from our restaurant.</p>
      </div>

      {foods.length === 0 ? (
        <p>No food items found.</p>
      ) : (
        <div className="foods-grid">
          {foods.map((food) => (
            <Link
              to={`/foods/${food.id}`}
              key={food.id}
              className="public-food-card"
            >
              <img
                src={
                  food.imageUrl ||
                  "https://via.placeholder.com/400x260?text=No+Image"
                }
                alt={food.name}
              />

              <div className="public-food-content">
                <div className="public-food-top">
                  <h2>{food.name}</h2>
                  <span>{food.category}</span>
                </div>

                <p>{food.description}</p>

                <div className="public-food-bottom">
                  <strong>Rs. {food.price}</strong>
                  <small>
                    {food.available ? "Available" : "Not Available"}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Foods;