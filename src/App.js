
import './App.css';
import QuestionsComponent from './QuestionsComponent';
import Review from './Review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
         {/*  <Review/> */}
          <QuestionsComponent/>

        </div>

      </section>
    </main>
  );
}

export default App;
