// app/api/todos/route.js

// Temporary in-memory todos array
let todos = [
  { id: 1, title: "Learn Next.js 13", completed: false },
  { id: 2, title: "Build an API route", completed: true },
];

// 🟢 GET → List all todos
export async function GET() {
  return Response.json(todos);
}

// 🟠 POST → Add a new todo
export async function POST(request) {
  const newTodo = await request.json();

  // Add simple validation
  if (!newTodo.title) {
    return Response.json({ error: "Title is required" }, { status: 400 });
  }

  const todo = {
    id: todos.length + 1,
    title: newTodo.title,
    completed: false,
  };

  todos.push(todo);
  return Response.json(todo, { status: 201 });
}
