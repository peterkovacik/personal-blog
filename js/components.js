document.addEventListener("DOMContentLoaded", function () {

    // headers on main pages
    if (document.getElementById('indexHeader')) {
        document.getElementById('indexHeader').innerHTML = `
            <h3>Linguistic Technology</h3>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages/blog.html">Blog</a></li>
                    <li><a href="pages/contact.html">Contact Sage Leaf</a></li>
                </ul>
            </nav>
        `
    };

    // headers in posts
    if (document.getElementById('pagesHeader')) {
        document.getElementById('pagesHeader').innerHTML = `
            <h3>Linguistic Technology</h3>
            <nav>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact Sage Leaf</a></li>
                </ul>
            </nav>
        `
    };

    // footers
    if (document.getElementById('footerIndex')) {
        document.getElementById('footerIndex').innerHTML = `
            <figure id="computer-screen-image">
                <img src="images/comp-screen.png">
                <figcaption id="computer-screen-caption">Linguistic Technology</figcaption>
            </figure>
            <div id="right-footer">
                <div id="social-media-icons">
                    <a href="https://twitter.com/" id="twitter-link" target="_blank"><img src="images/twitter-500-black.gif" alt="twitter-icon" ></a>
                    <a href="https://www.facebook.com/" id="facebook-link" target="_blank"><img src="images/facebook-500-black.gif" alt="facebook-icon"></a>
                    <a href="https://www.linkedin.com/" id="linkedin-link" target="_blank"><img src="images/linkedin-black.gif" alt="linkedin-icon"></a>
                </div>
                <div id="footer-text">
                    <p>&copy; 2021 | Peter Kovacik</p>
                </div>
            </div>
        `
    };

    // footers
    if (document.getElementById('footerPages')) {
        document.getElementById('footerPages').innerHTML = `
            <figure id="computer-screen-image">
                <img src="../images/comp-screen.png">
                <figcaption id="computer-screen-caption">Linguistic Technology</figcaption>
             </figure>
            <div id="right-footer">
                <div id="social-media-icons">
                    <a href="https://twitter.com/" id="twitter-link" target="_blank"><img src="../images/twitter-500-black.gif" alt="twitter-icon"></a>
                    <a href="https://www.facebook.com/" id="facebook-link" target="_blank"><img src="../images/facebook-500-black.gif" alt="facebook-icon"></a>
                    <a href="https://www.linkedin.com/" id="linkedin-link" target="_blank"><img src="../images/linkedin-black.gif" alt="linkedin-icon"></a>
                </div>
                <div id="footer-text">
                    <p>&copy; 2021 | Peter Kovacik</p>
                </div>
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