import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const LoadedUsers = () => {
    const users = useLoaderData();
    const [loadUser, setLoadUser] = useState(users); // Use state for UI updates
  
    const handleUserDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Simulate deleting from the database (replace with actual API call)
          fetch(`http://localhost:5000/users/${id}`, {
            method:'DELETE'
          })
          .then(res=>res.json())
          .catch(data=>{
           console.log(data)
          })
          Swal.fire({
            title: "Deleted!",
            text: "The user has been deleted.",
            icon: "success",
          });
  
          // Update state with remaining users
          const remainingUsers = loadUser.filter((user) => user._id !== id);
          setLoadUser(remainingUsers); // Use the state variable
        }
      });
    };
    return (
        <div>
            <h2 className="text-3xl">LoadedUsers:{loadUser.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadUser.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.metadata?.lastSignInTime}</td>
                                <td className="space-x-4">
                                    <button className="btn btn-success">E</button>
                                    <button
                                        onClick={() => handleUserDelete(user._id)}
                                        className="btn btn-warning">
                                        X
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LoadedUsers;