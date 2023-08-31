import classes from './postItem.module.css'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
 


function PostItem(props) {
  const router = useRouter()
 
  // Split the text into an array of words
  const words = props.description.split(' ');

  // Extract the first 20 words
  const firstTwentyWords = words.slice(0, 20);

  // Join the first 20 words back into a string
  const result = firstTwentyWords.join(' ');
  function showDetailsHandler() {
  
      router.push('/post/' + props.id);
    }

  


  return (<li className={classes.productItem}>

    <div className={classes.item}>
      <div className={classes.figure}>
        <img src={props.image} alt={props.title} />
      </div>

      <div className={classes.itemBody}>
        <h3>{props.title}</h3>
        <h6>{props.category}</h6>
         
        <div dangerouslySetInnerHTML={{ __html: result }} />

        <button onClick={showDetailsHandler}>Read More</button>
       
       
      </div>

    </div>


  </li>
  )
}

export default PostItem