import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <ul>
        <Link href={'/courses/java_full_stack'}>Java Full Stack</Link>
        <Link href={'/courses/python_full_stack'}>Python Full Stack</Link>
        <Link href={'/courses/react_full_stack'}>React Full Stack</Link>
      </ul>
    </div>
  );
};

export default page;
