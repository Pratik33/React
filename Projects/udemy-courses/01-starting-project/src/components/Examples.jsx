import { useState } from "react";

import TabButton from './TabButton'
import { EXAMPLES } from '../data'

const Examples = () => {

    const [selectedItem, setSelectedItem] = useState('')
    const handleSelect = (selectedItem) => {
        setSelectedItem(selectedItem)
    }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedItem === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedItem === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedItem === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedItem === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
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
    )
}

export default Examples;