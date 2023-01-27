import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () =>{
    return(
        // Fragment is useful when you do not want to create another node in the DOM
        <Fragment>
            <div className="navigation">
                {/* Link is a similar tag to the anchor tag */}
                <Link className="logo-container" to='/'>
                {/* The imported logo as a component  */}
                <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                    Shop
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                    Sign In
                    </Link>
                </div>
            </div>
            {/* The place where the other items to be rendered will appear that do not persist on the page after following the links */}
            <Outlet/>
        </Fragment>
    )
}

export default Navigation