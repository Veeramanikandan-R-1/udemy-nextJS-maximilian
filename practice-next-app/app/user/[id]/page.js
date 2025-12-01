import React from "react";

const UserPage = async ({ params }) => {
  params = await params;
  console.log(params);
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users = await res.json();
  return (
    <div>
      id: {params.id}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
