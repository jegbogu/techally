import Image from "next/image";
 

const BannerProduct = () => {
    return ( 
      <Image
      src='/rs.png'
      alt="product"
      width={500}
      height = {300}
      style={{marginTop:'50px'}}
      />

    
     );
}
 
export default BannerProduct ;