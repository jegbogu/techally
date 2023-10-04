import Link from 'next/link'
import Button from '../button'
import classes from './moreservices.module.css'
function MoreServices() {
    return (
        <div className={classes.moreservices}>
            <div className={classes.erp}>
                <h3>ERP & SaaS Products</h3>
                <ul>
                    <li>Automated System</li>
                    <li>Admin Dashboard and Management system</li>
                    <li>User Dashboard and Management system</li>
                    <li>Payment System</li>
                    <li>Blog and SEO</li>
                    <li>Fantastic UI/UX</li>
                </ul>
                <Link href='/contact'><Button btn={'Start Now'} /></Link> 
            </div>
            <div className={classes.ecom}>
                <h3>E-Commerce Application & Management Application</h3>
                <p>School Management application </p>
                <p> Hospital Management Application </p>
                <ul>
                    <li>Admin Dashboard and Management system</li>
                    <li>User Dashboard and Management system</li>
                    <li>Manage Products from Admin Dashboard</li>
                    <li>Payment System</li>
                    <li>Users Sign up System</li>
                    <li>Blog and SEO</li>
                    <li>Fantastic UI/UX</li>
                </ul>
                <Link href='/contact'><Button btn={'Start Now'} /></Link> 
            </div>
            <div className={classes.bus}>
                <h3>Business website & SEO</h3>
                <ul>
                    <li>Fantastic UI/UX</li>
                    <li>Well Optimised Articles</li>
                    <li>Easy to Manage Blog</li>
                    <li>Contact Forms and Quick Response System</li>
                    <li>Social Media Management</li>
                </ul>
               <Link href='/contact'><Button btn={'Start Now'} /></Link> 
            </div>
        </div>
    )
}

export default MoreServices