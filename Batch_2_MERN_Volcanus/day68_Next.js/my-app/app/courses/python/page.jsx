import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>In python List of Courses we offer</h1>
      <ul>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Artificial Intelegence</li>
        <li>Django</li>
        <li>Fast API</li>
        <li>Data Analyst</li>
      </ul>
      <Link href="/courses">
        <button>Navigate To Courses</button>
      </Link>
    </div>
  );
};

export default page;
