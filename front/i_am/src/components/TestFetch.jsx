import { useEffect, useState } from "react";

function TestFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://tag.tn:3000/i_am/entreprises") // ✅ Added :3000
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok " + res.status);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading data...</p>;

  return (
    <div>
      <h1>Test Fetch</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestFetch;