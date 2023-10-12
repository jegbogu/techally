import Image from "next/image"
import stpg from '../../public/stpg.png'
function Bimage(){
    return(
        <Image
        alt="Mountains"
        src={stpg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vh"
        style={{
          objectFit: 'cover',
        }}
      />
    )
}
export default Bimage