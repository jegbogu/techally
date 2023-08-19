import { useContext, useEffect, useState } from "react";
// import userContext from "../../store/userContext";
import DashboardFormB from "./dashboard-formB";
import DashboardForm from "./dashboard-form";
import { useSession } from 'next-auth/react'

const Dashboard = () => {
    // const { user } = useContext(userContext)

    const { data: session, status } = useSession()

    console.log(session.user)
    let username;
    if (status === "authenticated") {
        username = session.user.companyName
    } else {
        console.log('not true')
    }


    if (session.user.use === 'Birthday') {
        return (
            <div>
                <div>
                    <h3>Dashboard</h3>
                    <h3>{username}</h3>

                </div>
                <div>

                    <DashboardFormB />
                </div>






            </div>
        );

    }


    return (
        <div>
            <div>
                <h3>Dashboard</h3>
                <h3>{username}</h3>

            </div>
            <div>

                <DashboardForm/>
            </div>






        </div>
    );
}

export default Dashboard;