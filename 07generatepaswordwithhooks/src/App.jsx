import {useCallback, useEffect, useRef, useState} from 'react'

import './App.css'

function App() {
  const [Length, setlength] = useState(8)
  const [Numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [Password, setPassword] = useState("")
  //useref
  const paswordref = useRef(null)

  //password genrate kr raha or usecallback sy usko yay bol rahe ki length mai nuberallowe mai charallowed kuch v change hua usko yaad rkhe
  const genratepasword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(Numberallowed) str += '012345689'
    if(charallowed) str += "!#$%&'()*+{}[]~`"
    for(let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [Length, Numberallowed, charallowed, setPassword])
  const copypaswordtoclip = useCallback(() => {
    paswordref.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])
  useEffect(() => {
    genratepasword()
  }, [Length, Numberallowed, charallowed, genratepasword])


  return (
    <>
      <h1 className='capitalize text-4xl  font-semibold text-white mb-5'>password genterator</h1>
      <div className=' min-w-64 bg-slate-600  h-48 rounded-xl flex align-middle justify-center flex-col'>
        <div className='flex align-middle w-full justify-center'>
          <input type="text"
            value={Password} readOnly
            ref={paswordref}
            className="mt-1   px-3 py-2 bg-white border border-slate-300 rounded-s-lg w-7/12 " />
          <button className=' rounded-e-lg bg-blue-700 px-3 py-2 mt-1 font-semibold text-white' onClick={copypaswordtoclip} >Copy</button>
        </div>
        <div className='flex align-middle justify-center gap-4 mt-5'>
          <input type="range"
            min={6}
            max={100}
            value={Length}
            className=" bg-white border border-slate-300  cursor-pointer" onChange={(e) => setlength(e.target.value)} />
          <label className=' capitalize font-medium text-base text-white' >Length ({Length})</label>

          <input type="checkbox" defaultChecked={Numberallowed} id='numberinput' onChange={() => {
            setNumberallowed((prev) => !prev)
          }} className=" bg-white border border-slate-300 " />
          <label className=' capitalize font-medium text-base text-white'>Numbers</label>

          <input type="checkbox" defaultChecked={charallowed} id='charterinput' onChange={() => {setcharallowed((prev => !prev))}} className=" bg-white border border-slate-300 " />
          <label className=' capitalize font-medium text-base text-white'>Charecters</label>

        </div>
      </div>
    </>
  )
}

export default App
