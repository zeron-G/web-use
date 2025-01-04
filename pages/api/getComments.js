import { list } from '@vercel/blob';

export default async function handler(req, res) {
    const { blobs } = await list({ prefix: 'comments/' , blobName: 'web-use-blob'});
    
    // 拉取所有留言
    const comments = await Promise.all(
        blobs.map(async (blob) => {
            const response = await fetch(blob.downloadUrl);
            return response.json();
        })
    );

    // 按创建时间倒序排列
    comments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    res.status(200).json(comments);
}