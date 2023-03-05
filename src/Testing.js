import axios from "axios";
import React from "react";

const Testing = () => {
  const [state, setState] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8888/.netlify/functions/hello"
      );
      setState(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  });

  return (
    <div>
      {state.map((items) => (
        <li key={items.id}>{items.name}</li>
      ))}
    </div>
  );
};

export default Testing;
