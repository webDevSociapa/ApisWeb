const express = require("express");
const mongoose = require("mongoose");
const FPDF = require("fpdf");
const fs = require("fs");
const app = express();
const port = 3000;

// MongoDB Connection
mongoose.connect("mongodb+srv://webdev:<hGLLhqLzS3Ar4UnA>@apisindia.38dfp.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB Schema and Model
const BatchSchema = new mongoose.Schema({
  batchNo: String,
  name: String,
});

const Batch = mongoose.model("Batch", BatchSchema);

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post("/generate-pdf", async (req, res) => {
  const { batchNo } = req.body;

  // Fetch data from MongoDB based on batchNo
  try {
    const batchData = await Batch.findOne({ batchNo });

    if (batchData) {
      // Initialize FPDF
      const pdf = new FPDF();
      pdf.AddPage();

      // Set background image (predefined design)
      pdf.Image("path/to/your-design-template.jpg", 0, 0, 210, 297); // A4 size in mm (210 x 297)

      // Add dynamic batch no. text
      pdf.SetFont("Arial", "B", 16);
      pdf.SetTextColor(0, 0, 0); // Black color
      pdf.Text(50, 150, Batch No: ${batchData.batchNo}); // x, y position where you want to place batch no.

      // Save PDF to file
      const fileName = Batch_${batchNo}.pdf;
      pdf.Output("F", fileName); // "F" means saving the file locally

      // Send PDF as download response
      res.download(fileName, (err) => {
        if (err) {
          console.error(err);
        }
        // Optionally delete the file after download
        fs.unlinkSync(fileName);
      });
    } else {
      res.status(404).send("Batch not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching batch data or generating PDF");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});