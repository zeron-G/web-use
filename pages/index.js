import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch('/api/getComments');
            const data = await res.json();
            setMessages(data);
        }
        fetchComments();
    }, []);

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
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>欢迎来到我的博客</h1>
                <p className={styles.subtitle}>分享技术、生活与成长</p>
            </header>

            <main className={styles.main}>
                <section className={styles.posts}>
                    <article className={styles.post}>
                        <h2>我的第一篇博客</h2>
                        <p>这是我的第一篇博客文章，记录了我学习Next.js和部署到Vercel的过程。</p>
                    </article>
                    <article className={styles.post}>
                        <h2>使用Blob存储实现留言功能</h2>
                        <p>在这篇文章中，我将展示如何通过Vercel Blob和Next.js构建一个简单的留言板。</p>
                    </article>
                </section>
            </main>

            <footer className={styles.footer}>
                <h2>留言板</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>昵称：</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                        className={styles.input}
                    />
                    <label>留言：</label>
                    <textarea 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        required
                        className={styles.textarea}
                    ></textarea>
                    <button type="submit" className={styles.button}>提交</button>
                </form>
                
                <div className={styles.commentsList}>
                    {messages.map((msg, index) => (
                        <div key={index} className={styles.comment}>
                            <p><strong>{msg.username}</strong> 在 {msg.created_at} 说：</p>
                            <p>{msg.comment}</p>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
}
