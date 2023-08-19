import connectDB from "../utils/connectmongo"
import Recipients from '../model/reciepientSchema'



function WMsettings() {
    return (
        <div>
            <h1>WM setting</h1>
        </div>
    )
}

export default WMsettings

export const getStaticProps = async () => {
    console.log('Connecting to Mongo')
    const db = await connectDB()
    console.log('Connected to Mongo')
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    // we will display the date as DD-MM-YYYY 
   
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const foundUsers = (await Recipients.find({}))
const allUsers = JSON.stringify(foundUsers)
    console.log(foundUsers)

    return{
        props:{foundUsers:allUsers}
    }
}