import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './webRobot.css'

export default function WebRobot() {
    const navigate = useNavigate()
    const [inputUrl, setInputUrl] = useState('')
    const [inputElementPath, setInputElementPath] = useState('')
    const [length, setLength] = useState(0)
    const [catchedData, setCatchedData] = useState('')
    const [imageVersion, setImageVersion] = useState(0)
    const [hint, setHint] = useState(`
    <h3 class="gs_rt" ontouchstart="gs_evt_dsp(event)">怎么写? ==>> !!! 不可以用双引号 !!!
    返回 array, 包含所有符合条件的 element:
    const elements = await page.$$('h3.gs_rt[ontouchstart='gs_evt_dsp(event)']');
    `)
    const handleStartBtn = () => {
        axios.get('http://localhost:4005/manually',
            {
                params: {
                    url: inputUrl,
                    elementPath: inputElementPath
                }
            })
            .then(res => {
                console.log('res.data: ', res.data);
                // res.data.content obj to array
                const contentArr = []
                for (const key in res.data.content) {
                    contentArr.push(Number(key) + ". " + res.data.content[key])
                }
                setCatchedData(contentArr)
                setLength(res.data.length)
                setImageVersion(cur => cur + 1)
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }


    return (
        <div className="WebRobot" >
            <h1>WebRobot</h1>
            <nav>
                <button onClick={() => navigate(-1)}>back</button>
            </nav>
            <main>
                <img className='screen-shot' src={`http://localhost:4005/temp.png?v=${imageVersion}`} alt='shortcut' />
                <textarea type='text' placeholder='want search website url' onChange={e => setInputUrl(e.target.value)} />
                <textarea type='text' placeholder='element path in website' onChange={e => setInputElementPath(e.target.value)} />
                <button onClick={handleStartBtn}>start</button>
                <p>result length: {length}</p>
                <ul>
                    {!catchedData ? "no data" : catchedData.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <p className='new-line'>
                    hint: {hint}
                </p>
            </main>
        </div>
    )
}