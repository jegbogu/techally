import { Fragment } from 'react'
import Head from 'next/head'
import classes from './index.module.css'
import BannerL from '../component/banner/bannerL';
import SectionOne from '../component/sectionOne/sectionOne';
import SectionTwo from '../component/sectionTwo/sectionTwo';
import FaqsAll from '../component/Faqs/faqsAll';
import PostList from '../component/post/postList';
import Post from '../model/postSchema'
import connectDB from '../utils/connectmongo';



const HomePage = (props) => {
  return (
    <>
      <Fragment>
        <Head>
          <title>Joerally | Quality articles and service to humans..</title>
          <meta
            name='description'
            content='This Application can help you send bulk schelduled emails, and SMS. This Application also has quality articles for tech writers'
          />
        </Head>
        <BannerL />
        <h2 className={classes.header}>Our Email Services</h2>
        <div className={classes.sendEmail}>

          <SectionOne />
          <SectionTwo />
        </div>

        <div className={classes.faqs}>
          <h2>FAQS</h2>
          <FaqsAll />
        </div>
        <div className={classes.post}>
          <h2>Articles</h2>
          <PostList posts={props.posts} />
        </div>


      </Fragment>

    </>

  );
}

export default HomePage;

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