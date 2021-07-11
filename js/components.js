document.addEventListener("DOMContentLoaded", function () {

    // headers on main pages
    if (document.getElementById('header')) {
        document.getElementById('header').innerHTML = `
            <h3>Linguistic Technology</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `
    };

    // headers in posts
    if (document.getElementById('postHeader')) {
        document.getElementById('postHeader').innerHTML = `
            <h3>Linguistic Technology</h3>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../blog.html">Blog</a></li>
                <li><a href="../contact.html">Contact</a></li>
            </ul>
        `
    };

    // footers
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = `
            <div id="computer-screen-image"></div>
            <div id="footer-text">
                <p>&copy; 2021 | Peter Kovacik</p>
            </div>
        `
    };

    // recent posts
    if (document.getElementById('recentPosts')) {
        document.getElementById('recentPosts').innerHTML = `
            <h2>Recent Posts</h2>
            <ul>
                <li><a href="post1.html">Post 1</a></li>
                <li><a href="post2.html">Post 2</a></li>
                <li><a href="post3.html">Post 3</a></li>
                <li><a href="post4.html">Post 4</a></li>
                <li><a href="post5.html">Post 5</a></li>
                <li><a href="post6.html">Post 6</a></li>
            </ul>
        `
    };
});