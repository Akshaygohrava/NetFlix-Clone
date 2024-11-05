import './App.css'
import series from './MovieList.json'

function App() {
  return (
    <>
  <h1 className="text-4xl font-bold mb-7 pb-2 text text-red-500">NetFlix</h1>
  <ul className='flex flex-row gap-8 flex-wrap justify-around'>
   {series.map((props) => (
    <li key={props.id} className='flex flex-col gap-5 justify-start align-middle'>
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
  </ul>
    </>
  )
}

export default App
