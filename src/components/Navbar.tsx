import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">
                <Link to='/'>Trust</Link>
            </div>
            <div className="category">

            </div>
            <div className="search">

            </div>
            <div className="user">

            </div>
            <div className="cart">
                <Link to='/cart'>cart</Link>
            </div>
        </div>
    )
}

export default Navbar