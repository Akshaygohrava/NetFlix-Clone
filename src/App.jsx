import './App.css'
import series from './MovieList.json'

function App() {
  return (
    <>
  <h1 className="text-4xl font-bold mb-7 pb-2 text text-red-500">NetFlix</h1>
  <ul className='net-ul flex flex-row gap-8 flex-wrap justify-around'>
   {series.map((props) => (
    <li key={props.id} className='netflix-list flex flex-col gap-5 justify-start align-middle'>
      <img src={props.img_url} alt={props.name}></img>
      <h1>Series Name: {props.name}</h1>
      <h2>Title: {props.id}</h2>
      <h2>Rating: <span className={props.rating < 8.5 ? "normal" : "hit"}>{props.rating}</span></h2>
      <h2>Description: {props.description}</h2>
      <h2>Cast: {props.cast}</h2>
      <h2>Genre: {props.genre}</h2>
      <button className='mb-5'><a href={props.watch_url}>Watch Now</a></button>
    </li>
   ))}
   <form className='mt=7'>
   <input type='email' className='input-email' placeholder='Email address' required></input>
   <button className='netflix-button'>Get Started</button>
   </form>
   <footer className='relative bottom-0 bg-stone-900 p-5'>
    <p>Questions? Call </p><span className='underline'>000-800-919-1694</span>
    <div className='footer-msg flex flex-row justify-center align-middle mt-5 gap-32 flex-wrap'>
    <ul className='flex flex-col gap-1'>
      <li>FAQ</li>
      <li>Investor Relations</li>
      <li>Privacy</li>
      <li>Speed Test</li>
    </ul>
    <ul className='flex flex-col gap-1'>
      <li>Help Centre</li>
      <li>Jobs</li>
      <li>Cookie Preferences</li>
      <li>Legal Notices</li>
    </ul>
    <ul className='flex flex-col gap-1'>
      <li>Account</li>
      <li>Ways to Watch</li>
      <li>Corporate Information</li>
      <li>Only on Netflix</li>
    </ul>
    <ul className='flex flex-col gap-1'>
      <li>Media Centre</li>
      <li>Terms of Use</li>
      <li>Contact Us</li>
    </ul>
    </div>
   <p className='mt-3'>@NetFlix India</p>
   </footer>
  
  </ul>
    </>
  )
}

export default App
