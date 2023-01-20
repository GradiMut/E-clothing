import { categories } from './data';
import Directory from './components/Directory/Directory';

const App = () => {
  return (
    <Directory categories={categories}/>        
  )
};

export default App;
