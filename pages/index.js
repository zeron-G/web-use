import { useState, useEffect } from 'react';

export default function Home() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [messages, setMessages] = useState([]);

    // 加载留言列表
    useEffect(() => {
        async function fetchComments() {
            const res = await fetch('/api/getComments');
            const data = await res.json();
            setMessages(data);
        }
        fetchComments();
    }, []);

    // 提交留言
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, comment })
        });

        if (res.ok) {
            const newComment = await res.json();
            setMessages([newComment, ...messages]);
            setUsername('');
            setComment('');
        }
    };

    return (
        <div className="container">
            <h1>留言板</h1>
            <form onSubmit={handleSubmit}>
                <label>昵称：</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                <label>留言：</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    required
                ></textarea>
                <button type="submit">提交</button>
            </form>

            <h2>留言列表</h2>
            {messages.map((msg, index) => (
                <div key={index} className="comment">
                    <p><strong>{msg.username}</strong> 在 {msg.created_at} 说：</p>
                    <p>{msg.comment}</p>
                </div>
            ))}
        </div>
    );
}