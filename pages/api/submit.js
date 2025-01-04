import { put } from '@vercel/blob';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, comment } = req.body;

        const data = {
            username,
            comment,
            created_at: new Date().toISOString()
        };

        // 将留言存储为 JSON 文件
        const blob = await put(`comments/${Date.now()}.json`, JSON.stringify(data), {
            access: 'public',
            contentType: 'application/json'
        });

        res.status(200).json(data);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}