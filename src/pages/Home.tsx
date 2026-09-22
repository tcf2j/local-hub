import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

//components
import BusinessCard from "../components/BusinessCard";
import Create from "./Create";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [businesses, setBusinesses] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const { data, error } = await supabase.from("businesses").select();

      if (error) {
        setFetchError("Could not fetch the businesses");
        setBusinesses(null);
        console.log(error);
      }
      if (data) {
        setBusinesses(data);
        setFetchError(null);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {businesses && (
        <div className="businesses">
          {/*order-by buttons*/}
          <div className="buisness-grid">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      )}
      <div>
        <Create />
      </div>
    </div>
  );
}

export default Home;
