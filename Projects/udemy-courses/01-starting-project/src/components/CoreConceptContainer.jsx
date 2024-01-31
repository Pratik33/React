import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcepts';

const CoreConceptContainer = () => {
    return (
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
       
      </main>
    )
}


export default CoreConceptContainer;