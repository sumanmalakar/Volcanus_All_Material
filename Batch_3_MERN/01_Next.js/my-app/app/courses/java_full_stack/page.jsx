import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>Welcome to Java Course</h1>
      <Link href={'/courses'}>
        <button>Back to courses</button>
      </Link>
    </div>
  );
}

export default page