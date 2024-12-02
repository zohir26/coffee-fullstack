import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffees = useLoaderData();
  const [deletedCoffees, setDeletedCoffees] = useState(coffees);

  return (
    <>
      <h1 className='text-6xl text-blue-500'>Coffee {deletedCoffees.length}</h1>
      <div className='text-center grid md:grid-cols-2 gap-4'>
        {deletedCoffees.map(coffee => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            deletedCoffees={deletedCoffees}
            setDeletedCoffees={setDeletedCoffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
