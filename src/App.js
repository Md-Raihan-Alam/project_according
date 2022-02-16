import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions]=useState(data);
  return (
  <React.Fragment>
    <main>
      <div className='container'>
        <h3>Questions and Answers about login</h3>
        <div className='info'>
          {
            questions.map((ques)=>{
              return <SingleQuestion key={ques.id} {...ques}/>
            })
          }
        </div>
      </div>
    </main>
  </React.Fragment>
  );
}

export default App;