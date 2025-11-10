import React from "react";

export default function BlogPost({ params }) {
  params = React.use(params);
  console.log("params", params.slug);
  return <div>blog post {params.slug}</div>;
}
