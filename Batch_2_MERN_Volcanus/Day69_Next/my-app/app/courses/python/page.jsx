"use client";
import Link from "next/link";
import React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button } from "@mui/material";

const page = () => {
  const topCourse = [
    { label: "Machine Learning", year: 1994 },
    { label: "Deep Learning", year: 1994 },
    { label: "Artificial Intelegence", year: 1994 },
    { label: "Django Full Stack", year: 1994 },
    { label: "Fast API", year: 1994 },
    { label: "Data Analyst", year: 1994 },
  ];
  return (
    <div>
      <h1>In python List of Courses we offer</h1>
      <ul>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Artificial Intelegence</li>
        <li>Django Full Stack</li>
        <li>Fast API</li>
        <li>Data Analyst</li>
      </ul>
      <Autocomplete
        options={topCourse}
        sx={{
          width: 500,
          margin: "10px",
          "& .MuiInputBase-root": { color: "white", backgroundColor: "black" },
          "& .MuiInputLabel-root": { color: "white" },
        }}
        renderInput={(p) => (
          <TextField {...p} label="India stratup" sx={{ color: "white" }} />
        )}
      />
      <Link href="/courses">
        <Button variant="contained" sx={{m:2,p:2}}>
          Navigate To Courses
        </Button>
      </Link>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
    </div>
  );
};

export default page;
