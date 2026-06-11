import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const foodRef = doc(db, "foods", id);
        const snapshot = await getDoc(foodRef);

        if (snapshot.exists()) {
          setFood({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching food:", error);
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  if (loading) {
    return <h2 className="loading-text">Loading food details...</h2>;
  }

  if (!food) {
    return (
      <div className="food-detail-page">
        <h1>Food not found</h1>
        <Link to="/foods" className="back-link">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="food-detail-page">
      <Link to="/foods" className="back-link">
        ← Back to Menu
      </Link>

      <div className="food-detail-card">
        <img
          src={
            food.imageUrl ||
            "https://via.placeholder.com/700x450?text=No+Image"
          }
          alt={food.name}
        />

        <div className="food-detail-info">
          <span className="detail-category">{food.category}</span>
          <h1>{food.name}</h1>
          <p>{food.description}</p>

          <h2>Rs. {food.price}</h2>

          <span className={food.available ? "status" : "status not"}>
            {food.available ? "Available" : "Not Available"}
          </span>

          <button disabled={!food.available}>
            {food.available ? "Add to Cart" : "Currently Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;