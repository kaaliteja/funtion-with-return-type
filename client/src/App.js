import "./App.css";
import TenthStudent from "./components/TenthStudent";

function App() {
  let calculateTenthSummary = (
    engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks,

  
    
  ) => {
   console.log( engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks);

    let totalMarks = engMarks+telMarks+hindiMarks+mathsMarks+sciMarks+socMarks;

    let perc = (totalMarks/600)*100;

      perc = perc.toFixed(3);

    let passMarks = 35;

    let result;

    if(engMarks>=passMarks &&
      telMarks>=passMarks &&
      hindiMarks>=passMarks &&
      mathsMarks>=passMarks &&
      sciMarks>=passMarks &&
      socMarks>=passMarks 
    ){
      result="Pass";
    }else{
      result="Fail"
    }


    let summaryObj = {
      tot:totalMarks,
      perc:perc,
      res:result
    }
  
    return  summaryObj ;
  };

   let summary = calculateTenthSummary(1,2,3,4,5,6);


   console.log(summary);
  return (
    <div className="App">
      <h1>Funtion with return type</h1>
      <TenthStudent firstName="Kaali" lastName="Teja"/>
    </div>
  );
}

export default App;
