"use client"; // must be a Client Component

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>⚠️ Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()} // reset will retry rendering the route
        style={{
          background: "#0070f3",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
