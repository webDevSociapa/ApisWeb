// const express = require("express");
// const mongoose = require("mongoose");
// const FPDF = require("fpdf");
// const fs = require("fs");
// const app = express();
// const port = 3000;

// // MongoDB Connection
// mongoose.connect("mongodb://localhost:27017/your-db-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // MongoDB Schema and Model
// const BatchSchema = new mongoose.Schema({
//   batchNo: String,
//   name: String,
//   otherField: String, // You can add any other data fields you need
// });

// const Batch = mongoose.model("Batch", BatchSchema);

// // Middleware for form data
// app.use(express.urlencoded({ extended: true }));

// // Route for rendering the form
// app.get("/", (req, res) => {
//   res.send(`
//     <form action="/generate-pdf" method="POST">
//       <label>Batch No:</label>
//       <input type="text" name="batchNo" required>
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// // Route to handle form submission and generate PDF
// app.post("/generate-pdf", async (req, res) => {
//   const { batchNo } = req.body;

//   // Fetch data from MongoDB based on batchNo
//   try {
//     const batchData = await Batch.findOne({ batchNo });

//     if (batchData) {
//       // Redirect to download page
//       res.redirect(`/download-pdf/${batchNo}`);
//     } else {
//       res.status(404).send("Batch not found");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching batch data");
//   }
// });

// // Route to show download option
// app.get("/download-pdf/:batchNo", async (req, res) => {
//   const { batchNo } = req.params;

//   // Fetch data from MongoDB
//   try {
//     const batchData = await Batch.findOne({ batchNo });

//     if (batchData) {
//       // Initialize FPDF
//       const pdf = new FPDF();
//       pdf.AddPage();

//       // Set background images (3 predefined images)
//       pdf.Image("path/to/your-image-1.jpg", 10, 10, 50, 50); // x, y, width, height
//       pdf.Image("path/to/your-image-2.jpg", 70, 10, 50, 50);
//       pdf.Image("path/to/your-image-3.jpg", 130, 10, 50, 50);

//       // Add dynamic batch no. and other text
//       pdf.SetFont("Arial", "B", 16);
//       pdf.SetTextColor(0, 0, 0); // Black color
//       pdf.Text(50, 150, `Batch No: ${batchData.batchNo}`); // Add batch number
//       pdf.Text(50, 160, `Name: ${batchData.name}`); // Add other dynamic fields if needed
//       pdf.Text(50, 170, `Other Info: ${batchData.otherField}`);

//       // Save PDF to file
//       const fileName = `Batch_${batchNo}.pdf`;
//       pdf.Output("F", fileName); // Save the file locally

//       // Render download option
//       res.send(`
//         <h1>PDF Generated</h1>
//         <a href="/download/${fileName}" download>Download PDF</a>
//       `);
//     } else {
//       res.status(404).send("Batch not found");
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching batch data or generating PDF");
//   }
// });

// // Route to download PDF
// app.get("/download/:fileName", (req, res) => {
//   const { fileName } = req.params;

//   // Send the PDF as a downloadable file
//   res.download(fileName, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     // Optionally delete the file after download
//     fs.unlinkSync(fileName);
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
