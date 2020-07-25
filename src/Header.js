import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <ul className= "ul">
        <Link className = "li" to = '/'><span className = 'link'>ToDo</span>  </Link>
        <Link className = "li" to = '/FormTravel'><span className = 'link'>Form Testing</span>  </Link>
        <li className = "li"><a className = "link" href="contact.asp">Coments</a></li>
        <Link className = "li" to = '/ApiTest'><span className = 'link'>API Test</span>  </Link>
    </ul>
        </div>
    )
}

export default NavBar;