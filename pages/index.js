<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="高荣泽">
    <meta name="description" content="个人博客 - 分享学习与生活">
    <title>高荣泽的个人博客</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background-color: #f4f4f4;
            scroll-behavior: smooth;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1.5rem 0;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 20px;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 1100px;
            margin: 30px auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        .intro, .blog-posts, .contact, .comments-section {
            margin-bottom: 30px;
        }
        h1, h2, h3 {
            color: #333;
            text-align: center;
            font-weight: 700;
        }
        footer {
            text-align: center;
            padding: 1.5rem 0;
            background-color: #333;
            color: white;
            font-size: 0.9rem;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        textarea, input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        button {
            padding: 10px 20px;
            background-color: #333;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1rem;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #555;
        }
    </style>
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
    <div class="container">
        <section class="intro fade-in" id="intro">
            <h2>关于我</h2>
            <p>你好！我是高荣泽，一名热爱学习和分享的大学生。我在这里记录我的学习经历和生活感悟，希望与你一起成长。</p>
        </section>
        <section class="blog-posts fade-in" id="posts">
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
        <section class="contact fade-in" id="contact">
            <h2>联系我</h2>
            <p>如果你对我的博客感兴趣或者有任何问题，可以通过以下方式联系我：</p>
            <p>Email: 2950243695@qq.com</p>
            <p>微信：gyrz123</p>
        </section>
        <section class="comments-section fade-in">
            <h2>留言板</h2>
            <form action="/api/submit" method="POST">
                <input type="text" name="username" placeholder="输入昵称" required>
                <textarea name="comment" rows="5" placeholder="输入留言内容" required></textarea>
                <button type="submit">提交留言</button>
            </form>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 高荣泽的个人博客. 保留所有权利.</p>
    </footer>
    <script>
        const fadeElements = document.querySelectorAll('.fade-in');
        window.addEventListener('scroll', () => {
            fadeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    el.classList.add('visible');
                }
            });
        });
    </script>
</body>
</html>
