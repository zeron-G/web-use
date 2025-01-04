export default function Home() {
    return (
        <>
            <head>
                <title>高荣泽的个人博客</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="高荣泽" />
                <meta name="description" content="个人博客 - 分享学习与生活" />
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <header>
                    <h1>欢迎来到高荣泽的博客</h1>
                    <nav>
                        <ul>
                            <li><a href="#intro">关于我</a></li>
                            <li><a href="#posts">文章</a></li>
                            <li><a href="#contact">联系我</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="container">
                    <section className="intro" id="intro">
                        <h2>关于我</h2>
                        <p>你好！我是高荣泽，一名热爱学习和分享的大学生。我在这里记录我的学习经历和生活感悟，希望与你一起成长。</p>
                    </section>
                    <section className="blog-posts" id="posts">
                        <h2>最近文章</h2>
                        <article>
                            <h3>我的第一篇博客文章</h3>
                            <p>欢迎阅读我的第一篇博客文章。在这篇文章中，我将分享我的学习心得和一些有趣的项目经历。</p>
                            <a href="#">阅读更多</a>
                        </article>
                        <article>
                            <h3>如何提升编程技能</h3>
                            <p>学习编程是一段漫长的旅程。在这篇文章中，我会分享一些帮助我提升编程技能的有效方法。</p>
                            <a href="#">阅读更多</a>
                        </article>
                    </section>
                    <section className="contact" id="contact">
                        <h2>联系我</h2>
                        <p>如果你对我的博客感兴趣或者有任何问题，可以通过以下方式联系我：</p>
                        <p>Email: 2950243695@qq.com</p>
                        <p>微信：gyrz123</p>
                    </section>
                    <section className="comments-section">
                        <h2>留言板</h2>
                        <form action="/api/submit" method="POST">
                            <input type="text" name="username" placeholder="输入昵称" required />
                            <textarea name="comment" rows="5" placeholder="输入留言内容" required></textarea>
                            <button type="submit">提交留言</button>
                        </form>
                    </section>
                </div>
                <footer>
                    <p>&copy; 2024 高荣泽的个人博客. 保留所有权利.</p>
                </footer>
            </body>
        </>
    );
}