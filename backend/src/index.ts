import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { chat } from './routes/chat';

const app = new Hono();

app.use('*', cors());

app.get('/health', (c) => c.json({ status: 'ok' }));

app.route('/chat', chat);

export default app;
