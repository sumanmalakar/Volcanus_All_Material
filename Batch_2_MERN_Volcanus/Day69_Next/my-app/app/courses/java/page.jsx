"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "core_java", price: 12000 },
    { id: 2, title: "dsa_in_java", price: 15000 },
    { id: 3, title: "full_stack_developement", price: 2000 },
  ]);

  return (
    <div>
      <h1>Java Courses We Offer</h1>
      <ul>
        {courses.map((data) => (
          <div key={data.id}>
            <li>
              <Link href={`/courses/java/${data.title}`}>{data.title}</Link>
            </li>
          </div>
        ))}
      </ul>
      <Link href="/courses">
        <button>Navigate To Courses</button>
      </Link>
    </div>
  );
};

export default page;
