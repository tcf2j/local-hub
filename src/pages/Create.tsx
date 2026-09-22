import { use, useState } from "react";

import supabase from "../config/supabaseClient";

const Create = () => {
  const [name, setName] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setFormError("Please fill in business name");
      return;
    }

    const { data, error } = await supabase
      .from("businesses")
      .insert([{ name }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in business name");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Create New Business</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
