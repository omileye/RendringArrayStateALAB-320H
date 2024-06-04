import { useState } from 'react'
import Learner from './Learner';
import learnersData from './Data/learners';

const App = () => {
  const [learnerData] = useState({ learners: learnersData });

  return (
    <div>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
};

export default App;
