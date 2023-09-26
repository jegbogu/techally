import Link from 'next/link'
import data from './data'
import classes from './education.module.css'
function Education(){
    const sectionOne = data.slice(0,3)
    const sectionTwo = data.slice(3,6)
   
    return(
        <div className={classes.edu}>
            <div >
                {sectionOne.map((el, i)=>{
                    return (
                        <div className={classes.one} key={i}>
                            <h2>{el.degree}</h2>
                            <p className={classes.sch}>{el.school}</p>
                            <div className={classes.cert}>
                            <p ><Link href={el.certificate}>{el.certificate}</Link> </p>
                            </div>
                           
                        </div>
                    )
                })}
            </div>
            <div>
                {sectionTwo.map((el,i)=>{
                    return (
                        <div className={classes.two} key={i}>
                            <h2>{el.degree}</h2>
                            <p className={classes.sch}>{el.school}</p>
                            <div className={classes.cert}>
                            <p><Link href={el.certificate} target='_blank'>{el.certificate}</Link></p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Education