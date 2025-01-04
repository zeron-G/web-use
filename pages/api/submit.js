import { put } from '@vercel/blob';

// API 端点处理留言提交
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, comment } = req.body;

        const data = {
            username,
            comment,
            created_at: new Date().toISOString()
        };

        // 将留言存入 Blob 存储，指定存储名称为 web-use-blob
        const blob = await put(`comments/${Date.now()}.json`, JSON.stringify(data), {
            access: 'public',
            contentType: 'application/json',
            blobName: 'web-use-blob'  // 这里指定你的 Blob 存储名称
        });

        res.status(200).json(data);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}