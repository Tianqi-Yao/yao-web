import {Link, useHistory} from 'react-router-dom'

export default function HomePage(){
    return(
        <div className="HomePage" > 
            <h1>Home</h1>
            <Link to='/netflix'><button>netflix</button></Link>
            <Link to='/robot'><button>web robot</button></Link>
        </div>
    )
}