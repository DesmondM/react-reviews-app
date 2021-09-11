import React, {useState} from 'react';
import qtns from './data2'
import Questions from './Questions';


const QuestionsComponent = () => {
    const [questions, setQuestions] = useState(qtns)
    return (
       <main>
           <div className= 'container'>
               <h3>Questions and answers about login</h3>
               <section className='info'>
                   {
                       questions.map((question)=>{
                           return <Questions key ={question.id} {...question}/>
                           
                       })
                   }
               </section>
           </div>
       </main>
    )
}

export default QuestionsComponent
