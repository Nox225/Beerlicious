// import { faL } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
// import Card from './Proj2/Card'
// import Card1 from './Proj4/Card1.js'
// import data from './Proj2/data.js'
// import data from './Proj4/data.js'
// import Header from './Proj5/Header.js'
// import Meme from './Proj5/Meme.js'
// import Die from './Proj7/Die.js'
// import {nanoid} from 'nanoid'
// import Confetti from 'react-confetti'

//import Beer from './components/Beer.js'
//import BeerList from './components/BeerList.js'
// import Loading from './components/Loading.js'
import Navbar from './components/Navbar.js'
// import SearchForm from './components/SearchForm'

import About from './pages/About.js'
import Error from './pages/Error.js'
import Home from './pages/Home.js'
import SingleBeer from './pages/SingleBeer.js'

export default function App(props){
    // return (
    //         <Router>
    //             <Navbar />
    //             <Switch>
    //                 <Route exact path="/">
    //                     <Home />
    //                 </Route>
    //                 <Route path="/about">
    //                     <About />
    //                 </Route>
    //                 <Route  path="/beer/:id">
    //                     <SingleBeer />
    //                 </Route>
    //                 <Route path="*">
    //                     <Error />
    //                 </Route>
    //             </Switch>
    //         </Router>
    // )
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='beer/:id' element={<SingleBeer />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      );
}






























// export default function App(props){

//     const [dice, setDice] = React.useState(allNewDice())
//     const [tenzies, setTenzies] = React.useState(false)

//     React.useEffect(() => {
//         const allHeld = dice.every(die => die.isHeld)
//         const firstValue = dice[0].value
//         const allSameValue = dice.every(die => die.value === firstValue)

//         if (allHeld && allSameValue){
//             setTenzies(true)
//             console.log("You won!")
//         }
//     }, [dice])

//     function allNewDice(){
//         const dice = []
//         let i = 0
//         while(i < 10){
//             dice.push({
//                 value: Math.ceil(Math.random() * 6), 
//                 isHeld: false,
//                 id: nanoid()
//             })
//             i++
//         }
//         return dice
//     }

//     function roll(){
//         if(!tenzies){
//             setDice(prevDice => prevDice.map((die) => {
//                 return die.isHeld === false ?
//                 {
//                     value: Math.ceil(Math.random() * 6),
//                     isHeld: false,
//                     id: nanoid()
//                 } :
//                 die
//             }))
//         }else{
//             setTenzies(false)
//             setDice(allNewDice())
//         }
//     }

//     const diceArr = dice.map(die => 
//         <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>
//     )

//     function holdDice(id){
//         setDice(prevDice => prevDice.map((die) => {
//                 return die.id === id ? 
//                 {...die, isHeld: !die.isHeld} : 
//                 die
//             }))
//         console.log(id)
//     }

//     return (
//         <main>
//             {tenzies && <Confetti />}
//             <div className='container'>    
//                 {diceArr}
//             </div>
//             <button 
//                 className='roll-btn' 
//                 onClick={roll}
//                 >
//                     {tenzies ? "New Game" : "Roll"}
//             </button>
//         </main>

//     )
// }


// export default function App(){

//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
//                 // item={item}
//                 // image={item.coverImg}
//                 // rating={item.stats.rating}
//                 // reviewCount={item.stats.reviewCount}
//                 // location={item.location}
//                 // title={item.title}
//                 // price={item.price}
//                 // openSpots={item.openSpots}
//             />
//         )
//     })

//     return (
//         <section className="card--list">
//             {cards}
//         </section>
//     )
// }

// export default function App(props){

//     const cards = data.map(item => {
//         return (
//             <Card1 
//                 item={item}
//             />
//         )
//     })

//     return(
//         <section className='body'>
//             {cards}
//         </section>
//     )
// }





// export default function App(props){
//     return(
//         <div>
//             <Header />
//             <Meme />
//         </div>
//     )
// }

// ********************************BOXES*******************************

// import boxes from "./Proj6/boxes.js"
// import Box from './Proj6/Box.js'

// export default function App(props) {
    
//     const [squares, setSquares] = React.useState(boxes)

//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id}
//             on={square.on}
//             toggle={() => toggle(square.id)}
//         />
//     ))

//     function toggle(id){
//         setSquares(prevSquares => {
//             return prevSquares.map((square) => {
//                 return square.id === id ? {...square, on: !square.on} : square
//             })
//     })
//     }

//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }




//     return (
//         <div className="body">
//             <Card 
//                 image="katie-zeferes.jpg"
//                 rating="2.0"
//                 reviewCount="6"
//                 country="India"
//                 title="Life Lessons with Katie Zeferes"
//                 price="136"
//             />
//             <Card 
//                 image="???"
//                 rating="5.0"
//                 reviewCount={69}
//                 country="USA"
//                 title="Life Lessons with Katie Zeferes"
//                 price="136"
//             />
//         </div>
//     )
// }

// export default function App(){
//     return (
//         <div className="body">
//             <Joke 
//                 setup = "asdfasdf"
//                 punchline="hgjfghj"
//             />
//             <Joke 
//                 setup = "bvncvbn"
//                 punchline="tyutyutyu"
//             />
//             <Joke 
//                 setup = "xcxzv"
//                 punchline="opipi"
//             />
//             <Joke 
//                 setup = "bnmbnmbn"
//                 punchline="qwqweq"
//             />

//         </div>
//     )
// }




// *******************useState************************

// import React from "react"

// export default function App() {
//     /**
//      * Challenge: Set up state to track our count (initial value is 0)
//      */
//     const [count, setCount] = React.useState(0)
    
//     function add(){
//         setCount(count+1)
//     }
    
//     function sub(){
//         setCount(count-1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={sub}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

// **********************ULEPSZONE**************************

// import React from "react"

// export default function App() {

//     const [count, setCount] = React.useState(0)
    
//     function add(){
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function sub(){
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={sub}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

// *****************************useState() + ternery*******************
// import React from "react"

// export default function App() {
    
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
    
//     function change(){
//         setIsGoingOut(!isGoingOut)
//     }
      
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={change} className="state--value">
//                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
//             </div>
//         </div>
//     )
// }

// ***************************MODYFIKACJA ARRAY*************************

// function App() {

//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         setThingsArray(prev => [...prev, `Thing ${thingsArray.length + 1}`])
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// ******************************MODYFIKACJA OBJECT**************************

// import React from "react"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     let starIcon = contact.isFavorite ? "../images/star-filled.png" : "../images/star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                  ...prevContact,
//                  isFavorite: !contact.isFavorite
//             }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={starIcon} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }
