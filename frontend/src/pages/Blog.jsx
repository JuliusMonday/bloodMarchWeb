import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Blog.css';

const Blog = () => {
  return (
    <>
        <Navbar/>
        <div className="blog-container">
            <section className="hero-section-blog">
                <div className="hero-content">
                <h1>Welcome to Our Blog</h1>
                <p>Your go-to source for the latest insights, tips, and stories.</p>
                <button className="hero-button">Read More</button>
                </div>
            </section>
            <div className="posts-section">
                <h2>Latest Posts</h2>
                <div className="post">
                <h3>Blog Post Title 1</h3>
                <p>This is a brief description of the first blog post. It gives an overview of what the post is about.</p>
                </div>
                <div className="post">
                <h3>Blog Post Title 2</h3>
                <p>This is a brief description of the second blog post. It highlights the key points discussed in the post.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default Blog;
