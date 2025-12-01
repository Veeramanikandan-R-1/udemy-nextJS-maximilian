import React from "react";

const ContactPage = async () => {
  await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Write interview notes" }),
  });

  let todos = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  todos = await todos.json();
  console.log("todos", todos);
  return <div>Contact</div>;
};

export default ContactPage;
