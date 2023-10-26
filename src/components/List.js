import { useState, useEffect } from "react";

function List() {

    const [people, setPeople] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            setPeople(data);
        })

    }, []);

    return (
        <>
            <div className="border-b mx-8 my-6 sm:mx-24 sm:my-12 border-gray-900/10 pb-12">
                <h1 className="font-bold text-2xl">List of Users</h1>
                <ul className="divide-y divide-gray-200">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 ">
                                    <p className="text-sm inline-block font-semibold leading-6 text-gray-900">{person.name}</p>
                                    <span className="truncate text-xs leading-5 text-gray-500"> | {person.username}</span>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-600">{person.email}</p>
                                    <p className="truncate text-xs leading-5 text-blue-500 hover:cursor-pointer">{person.website}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.company.name}</p>
                                <div className="mt-1">
                                    <p className="text-xs text-end leading-5 text-gray-500">{person.phone}</p>
                                    <p className="text-xs leading-5 text-gray-500">{`${person.address.street}, ${person.address.suite} ${person.address.city}, ${person.address.zipcode}`}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default List;