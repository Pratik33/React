import reactImg from './assets/react-core-concepts.png';
`import Header from './components/Header/Header';
import Examples from './components/Examples';
import CoreConceptContainer from './components/CoreConceptContainer';

function App() {

  
  return (
    <>
      <Header img={reactImg} />
      <CoreConceptContainer />
      <Examples />
    </>
  );
}

export default App;
