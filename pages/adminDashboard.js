 
import { useSession, getSession } from "next-auth/react"

function AdminDashboard() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return <p>Loading...</p>
  }
  if (status === "unauthenticated") {
    return <p>Admin Access Denied</p>
  }
  if (status === 'authenticated' && session.user.role !== 'Admin') {
    return <h1>Not an Admin</h1>
  }
  return (
    <div  >
      <div  >
        <h2>Hello Admin</h2>
        <p>Administrator</p>
      </div>
       

    </div>
  );
}

export default AdminDashboard