import { useState } from "react" ;
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  const [step , setStep] = useState(1);
  const [isOpen , setIsOpen ] = useState(true);
  

  function handlePrevious() {
    if (step > 1 ) setStep(step - 1 );
    console.log(step);
    
  }
  // function handlePrevious() {
  //   if (step > 1) {
  //     setStep((s) => {
  //       const newState = s - 1; // Calculate the new state value
  //       console.log(newState); // Logging the new state value
  //       return newState; // Returning the new state value
  //     });
  //   }
  // }
  

//   function handleNext(){
//   if (step < 3 ) 
//   setStep(step + 1)
//   setStep(step + 1)
// ;
// console.log(step)
  
//   }


  function handleNext(){
    if (step < 3 ) 
    setStep((s) => s + 1)
    setStep((s) => s + 1)
  ;
  console.log(step)
    
    }
  


  return (<>
    <button className = "close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>
    { isOpen && <div className = "steps" >
    <div className = "numbers">
      <div className = {step >= 1 ? 'active' : ""}>1</div>
      <div className = {step >= 2 ? 'active' : ""}>2</div>
      <div className = {step >= 3 ? 'active' : ""}>3</div>
    </div>
    <p className = "message">step {step} : {messages[step -1]}</p>
    <div className = "buttons">
      <button style = {{ backgroundColor: '#7950f2' , color : '#fff'}} onClick={handlePrevious}
      >Previous</button>
      <button style = {{ backgroundColor: '#7950f2' , color : '#fff'}} onClick={handleNext}>Next</button>
    </div>
    </div>}
    </>)
}