import express from "express";

const app = express();

// CRUD => Create, Read, Update, Delete

// Create - method =>POST
// Read   - method =>GET
// Upate  - Method =>PUT
// Delete - Method =>Delete

const port = 1000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
