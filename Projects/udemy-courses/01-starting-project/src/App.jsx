import reactImg from './assets/react-core-concepts.png';

import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton'
import { useState } from 'react';



function App() {

  const [selectedItem, setSelectedItem] = useState('')
  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem)
  }
  return (
    <div>
      <Header img={reactImg} />
      <main>
        <section id='core-concepts' >
          <h2>Core concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(coreConcepts => {
                return <CoreConcept key = {coreConcepts.title} {...coreConcepts} />
              })
            }

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = { selectedItem === 'components' } onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = { selectedItem === 'jsx' } onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = { selectedItem === 'props' } onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = { selectedItem === 'state' } onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            {
              !selectedItem ? <p>Please select a topic.</p> : (
              <div> 
                  <h3>{EXAMPLES[selectedItem].title}</h3>
                  <p>{EXAMPLES[selectedItem].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedItem].code}
                    </code>
                  </pre>
                </div>)
            }

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
