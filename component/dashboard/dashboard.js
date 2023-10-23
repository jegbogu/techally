import { useContext, useEffect, useState } from "react";
// import userContext from "../../store/userContext";
import DashboardFormB from "./dashboard-formB";
import DashboardForm from "./dashboard-form";
import { useSession } from 'next-auth/react'
import DashboardBanner from "./dashboardBanner";
import classes from './dashboard.module.css'
import DashboardMain from "./dashboardMain";

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
                    <DashboardBanner />

                </div>
                <div>
                    <DashboardMain />
                    <DashboardFormB />
                </div>






            </div>
        );

    }


    return (
        <div className={classes.dashboard}>
            <div>
                <DashboardBanner />

            </div>
            <div>

                <DashboardForm />
            </div>






        </div>
    );
}

export default Dashboard;