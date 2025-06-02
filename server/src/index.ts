import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const corsOptions = {
	origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/hello', (_req, res) => {
	res.json({ message: "Hello from Express + TypeScript!" });
});

app.get('/api', (_req, res) => {
	res.json({ fruits: ["apple", "bannana", "raspberry"] })
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
