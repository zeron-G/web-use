import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
        <div className={styles.container}>
            <Head>
                <title>我的个人博客</title>
                <meta name="description" content="一个简单的个人博客与留言板" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>欢迎来到我的博客</h1>

                <section className={styles.blogSection}>
                    <h2>最新文章</h2>
                    <article className={styles.blogPost}>
                        <h3>如何学习编程</h3>
                        <p>学习编程需要持之以恒，掌握基础知识后要不断实践。在这篇文章中，我分享了自己学习编程的心得。</p>
                    </article>
                    <article className={styles.blogPost}>
                        <h3>前端开发入门</h3>
                        <p>前端开发是构建网页的核心部分，涉及 HTML、CSS 和 JavaScript。这里记录了一些常见的开发技巧。</p>
                    </article>
                </section>

                <div className={styles.commentSection}>
                    <h1>留言板</h1>
                    <form onSubmit={handleSubmit} className={styles.commentForm}>
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
                        <div key={index} className={styles.comment}>
                            <p><strong>{msg.username}</strong> 在 {msg.created_at} 说：</p>
                            <p>{msg.comment}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
