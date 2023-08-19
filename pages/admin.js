import Head from "next/head";
import { Fragment } from "react";
import Database from "../component/dashboard/database2";


const Admin = () => {
    return ( 
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Send us your Message"/>
            </Head>
            <div>
            <Database/>
            </div>
        </Fragment>
        
        
     );
}
 
export default Admin;