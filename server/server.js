import express from "express";
import cors from "cors";
import clarifai from "clarifai-nodejs";
const { Workflow } = clarifai;


const app = express();

app.use(cors());
app.use(express.json());

// const workflowUrl = "https://clarifai.com/shuspriggan/face-recognition-brain/workflows/face-detection-workflow-6eaz3";
const workflowUrl = "https://clarifai.com/clarifai/main/workflows/Face";
const OCRWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: "04ad4af96583423da68ea4106962d7ee",
  },
});

app.post("/imageurl", async (req, res) => {
  const { input } = req.body;

  try {
    const prediction = await OCRWorkflow.predictByUrl(input, "image");
      console.log("🔥 Clarifai Raw Response:", JSON.stringify(prediction, null, 2));
    const lastOutputIndex = prediction.resultsList[0].outputsList.length - 1;

    const faceData = prediction.resultsList[0].outputsList[lastOutputIndex].data;
    res.json(faceData);
  } catch (error) {
    console.error("Error from Clarifai:", error);
    res.status(500).json("API failed");
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
