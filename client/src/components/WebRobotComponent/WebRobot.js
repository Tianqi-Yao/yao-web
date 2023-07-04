import { useNavigate} from 'react-router-dom'

export default function WebRobot(){
    const navigate = useNavigate()
    return(
        <div className="WebRobot" >
            <h1>WebRobot</h1>
            <button onClick={()=>navigate(-1)}>back</button>
            <img alt='shortcut' />
        </div>
    )
}