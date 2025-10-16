import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function App() {
  return (
    <div className='font-[sans-serif]'>
      <ScrollRestoration/>
      <Outlet/>
    </div>
  )
}
