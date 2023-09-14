import { useSession } from 'next-auth/react'
import classes from './dashboardBanner.module.css'
function DashboardBanner() {
    const { data: session, status } = useSession()

    console.log(session.user)
    let username;
    let numberOfRecipients;
    let email;
    let use
    if (status === "authenticated") {
        username = session.user.companyName
        numberOfRecipients = session.user.recipients
        email =session.user.username
        use = session.user.use
    } else {
        console.log('not true')
    }
    return (
        <div className={classes.banner}>
            <div className={classes.dashboard}>
                <p>Dashboard</p>
            </div>
            <div className={classes.user}>
                <h3>{username}</h3>
                <p>({use} Emails)</p>
            </div>
            <div className={classes.card}>
                <div>
                    <p>Number of Registerd Users:</p>
                <h3>{numberOfRecipients.length-1}</h3>
                </div>
              <div>
                <p>Email:</p>
                <h3>{email}</h3>
              </div>

            </div>
        </div >
    )
}

export default DashboardBanner