import Link from 'next/link'
import data from './data'
import classes from './project.module.css'
import { useState } from 'react'

function Project() {
const[display, setDisplay] = useState(classes.hide)
const [picture,setPicture] = useState(false)    
const [title,setTitle] = useState(false)    



    return (
        

        
        <div className={classes.allPro}>

            {data.map((el,i) => {
                return (
                    <div className={classes.projects} key={i}>

                        <div className={classes.proF}>
                            <div className={classes.figure}>
                                <img src={el.banner} alt={el.title}/>
                            </div>
                            <button onClick={()=>{
                             const s =  data.find((e)=>{
                                return e.title === el.title
                               })
                              setPicture(s.picture)
                              setTitle(s.title)
                              setDisplay(classes.show)
                            }}>View </button>
                            <div className={display}>
                            <div className={classes.picture}>
                                <button onClick={()=>{
                                    setDisplay(classes.hide)
                                }}>Close Modal</button>
                                <img src={picture} alt={title}/>
                            </div>
                            </div>
                            
                            <div className={classes.title}>
                                <p>{el.title}</p>
                            </div>
                            <div className={classes.link}>
                                <p><Link href={el.link}> {el.link}</Link></p>
                            </div>
                            <div className={classes.features}>
                                <p>{el.coreFeatures}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
  
    )
}

export default Project