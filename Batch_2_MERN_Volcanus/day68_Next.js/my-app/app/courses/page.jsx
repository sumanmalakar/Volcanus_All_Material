import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Courses We Offer</h1>
      <ul>
        <li>
        <Link style={{color:'white',textDecoration:'none'}} href="/courses/java">Java</Link>
        </li>
        <li>
        <Link style={{color:'white',textDecoration:'none'}} href="/courses/python">Python</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
