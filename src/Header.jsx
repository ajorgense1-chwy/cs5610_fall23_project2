import { NavLink } from "react-router-dom";


export default function Header() {
    return (<div>
        <NavLink to='/'>Home</NavLink>&nbsp;
        <NavLink to='/info'>Info</NavLink>
        </div>
    )
}