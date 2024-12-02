import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, deletedCoffees, setDeletedCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              const remaining = deletedCoffees.filter(cof => cof._id !== _id);
              setDeletedCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Coffee" />
      </figure>
      <div className="flex gap-8 py-4">
        <div>
          <h2>Name: {name}</h2>
          <p className="font-semibold">Quantity: {quantity}</p>
          <p className="font-semibold">Supplier: {supplier}</p>
          <p className="font-semibold">Taste: {taste}</p>
          <p className="font-semibold">Category: {category}</p>
          <p className="font-semibold">Details: {details}</p>
        </div>
        <div className="join join-vertical gap-4 rounded-xl">
          <button className="btn btn-success join-item space-y-4">View Details</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-warning join-item">Edit</button>
          </Link>
          <button className="btn btn-error join-item" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
