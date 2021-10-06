import './App.css';
import Port from './Port'
import user1 from './images/saqib.jpg'
import user2 from './images/sufiyan.jpg'
import user3 from './images/Bilal.jpg'
import post1 from './images/post1.jpg'
import post2 from './images/post2.jpg'
import post3 from './images/post3.jpg'

function App() {
  return (
    <div className = "showcase">
      <Port shares="5" likes="15" postImg = {[post1 , post2, post3]} img={user1} name="Saqib Hussain" date="8/2/2021" title="School" description="Schools are Opening in Karachi"/>
      <Port shares="1" likes="10" postImg = {[post1 , post2, post3]} img={user2} name="Muhammad Sufiyan" date="8/2/2021" title="Vacations" description="Going for Pakistan Tour"/>
      <Port shares="4" likes="25" postImg = {[post1 , post2, post3]} img={user3} name="Bilal Rehman Khan" date="8/2/2021" title="Picnic" description="Going FarmHouse with family"/>
    </div>
  );
}

export default App;
