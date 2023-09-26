import Head from "next/head";
import { Fragment } from "react";
import classes from '../index.module.css'
import PostList from "../../component/post/postList";
import connectDB from "../../utils/connectmongo";
import Post from '../../model/postSchema'

const Blog = (props) => {
    return ( 
        <Fragment>
        <Head>
            <title>Blog</title>
            <meta name="description" content="We have our articles for technical writers"/>
        </Head>
        <div>
       
        <div className={classes.post}>
          <h2 style={{fontSize:"2.5em"}}>Ar<span className={classes.tic}>tic</span>les</h2>
          <PostList posts={props.posts} />
        </div>
        </div>
    </Fragment>
     );
}
 
export default Blog;
export async function getStaticProps() {
    await connectDB()
    const posts = await Post.find({})
    
  
    return {
      props: {
        posts: posts.map((post) => ({
          title: post.title,
  
          category: post.category,
          image: post.image,
  
          description: post.description,
  
          id: post._id.toString(),
        })),
        revalidate: 1,
      }
    }
  }