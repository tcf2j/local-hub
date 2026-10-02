import { use, useState } from "react";

import { supabase } from "../config/supabaseClient";

function MyProjects() {
  const [name, setName] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setFormError("Please fill in project name");
      return;
    }

    const { data, error } = await supabase.from("projects").insert([{ name }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in project name");
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

        <button>Create New Project </button>

        {formError && <p className="error">{formError}</p>}
      </form>
      <div>
        <h2>Current Projects</h2>
        <p>(List of Projects)</p>
      </div>
    </div>
  );
}

export default MyProjects;
