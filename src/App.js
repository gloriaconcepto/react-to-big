import React from 'react';
import BackGround from './BackgroundColor';
import Form from './Form';
import Chart from './Chart';
import './App.css';


function App() {




  const callApi = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <section className='compon-1'>Image 1</section>
      <section className='comp2'>

        <BackGround />

        <Form/>
        <Chart action={callApi}/>
      </section>
    </div>
  );
}

export default App;



