
import classes from './postDetail.module.css'
 
import WhatsappIcon from '../icons/whatsapp';
 



function PostDetail(props){
  
  // creating a share link
  const handleShareClick = async () => {

    if (navigator.share) {
      navigator
        .share({
          url: `http://www.joerally.com/post/${props.id}`,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }


  }


    return(
      <div className={classes.postDetail}>
         <h1>{props.title}</h1>
        <section className={classes.section} >
            <div className={classes.figure}>
           
            <img
        src={props.image}
        alt={props.title}
      />
            </div>
            <div className={classes.details}>
                

                <div className={classes.article}>
                  <h5>Category:</h5>
                  <h6>{props.category}</h6>
                  <hr/>
                  <div dangerouslySetInnerHTML={{ __html: props.description }} />
                    {/* <p>{props.description}</p> */}
                    <hr/>
                     
                     
                </div>
                <div className={classes.share}>
                  <h3>Share Post {props.hivepost} Via:</h3>
                  <span onClick={handleShareClick}><WhatsappIcon/></span>
            
                  </div>
                
            </div>

        </section>
        </div>
    )
}

export default PostDetail