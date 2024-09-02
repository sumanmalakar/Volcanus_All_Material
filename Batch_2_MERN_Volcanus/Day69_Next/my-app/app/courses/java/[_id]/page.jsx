import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  // console.log("This is coming from dr ",params)
  const arr = [
    { id: 1, title: "core_java", price: 12000 },
    { id: 2, title: "dsa_in_java", price: 15000 },
    { id: 3, title: "full_stack_developement", price: 2000 },
  ];

  const course = arr.filter((data) => data.title == params._id);
  return (
    <div>
      <h1>
        This dynamic Route for the java Courses ={" "}
        <span
          style={{
            color: "yellow",
          }}
        >
          {params._id}
        </span>{" "}
      </h1>
      <ul>
        <li>{course[0].id}</li>
        <li>{course[0].title}</li>
        <li>${course[0].price}</li>
      </ul>

      <Link href={"/courses/java"}>
        <button>Back to Java Course</button>
      </Link>
    </div>
  );
};

export default page;
