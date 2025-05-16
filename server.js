import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Get the last message from the request
  const messages = req.body.messages || [];
  const lastMessage = messages[messages.length - 1];

  // Create a mock response
  const response = {
    id: `msg_${Date.now()}`,
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: `This is a mock response to: "${lastMessage?.parts?.[0]?.text || 'Hello'}"`
      }
    ]
  };

  res.json(response);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
}); 