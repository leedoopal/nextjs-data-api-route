import fs from 'fs';
import path from 'path';

function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date(),
      email,
      text: feedbackText,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
