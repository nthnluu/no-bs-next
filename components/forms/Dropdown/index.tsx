import {useState} from "react";
import {Listbox} from "@headlessui/react";

const people = [
    {id: 1, name: 'Durward Reynolds', unavailable: false},
    {id: 2, name: 'Kenton Towne', unavailable: false},
    {id: 3, name: 'Therese Wunsch', unavailable: false},
    {id: 4, name: 'Benedict Kessler', unavailable: true},
    {id: 5, name: 'Katelyn Rohan', unavailable: false},
    {id: 12, name: 'Durward Reynolds', unavailable: false},
    {id: 22, name: 'Kenton Towne', unavailable: false},
    {id: 32, name: 'Therese Wunsch', unavailable: false},
    {id: 42, name: 'Benedict Kessler', unavailable: true},
    {id: 52, name: 'Katelyn Rohan', unavailable: false},
]

const Dropdown = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <div className="space-y-1 text-left">

            <label id="listbox-label" className="block text-sm leading-5 font-medium text-gray-700">
                Assigned to
            </label>

            <div className="relative w-full">
                <Listbox.Button className="focus:outline-none w-full">
                    <span className="inline-block w-full rounded-md shadow-sm">
                        <button type="button" aria-haspopup="listbox" aria-expanded="true"
                                aria-labelledby="listbox-label"
                                className="cursor-default relative w-full rounded-md border border-gray-300
                                bg-white pl-2.5 pr-10 py-2.5 text-left focus:outline-none focus:shadow-outline-blue
                                focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <span className="block truncate">
                                {selectedPerson.name}
                            </span>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none"
                                     stroke="currentColor">
                                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </span>
                </Listbox.Button>
                <Listbox.Options>

                    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                        <ul tabIndex={-1} role="listbox" aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-item-3"
                            className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto
                            focus:outline-none sm:text-sm sm:leading-5">
                            {people.map(person => (
                                //@ts-ignore
                                <Listbox.Option key={person.id} value={person} disabled={person.unavailable}
                                                className="focus:outline-none">
                                    {({ active, selected, disabled }) => (
                                        <li id="listbox-option-0" role="option"
                                            className={`${!active ? "text-gray-900" : "text-white bg-primary-600"} 
                                            cursor-default select-none relative py-2 pl-3 pr-9 text-left 
                                            ${disabled && "opacity-50 bg-gray-200"}`}>
                                            <span className={`${selected ? "font-semibold" : "font-normal"} block truncate`}>
                                            {person.name}
                                        </span>
                                            {selected  && <span
                                                className={`${active ? "text-white" : "text-primary-600"} 
                                                absolute inset-y-0 right-0 flex items-center pr-4`}>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </span>}

                                        </li>
                                    )}

                                </Listbox.Option>
                            ))}
                        </ul>
                    </div>
                </Listbox.Options>
            </div>
        </div>
    </Listbox>
}

export default Dropdown