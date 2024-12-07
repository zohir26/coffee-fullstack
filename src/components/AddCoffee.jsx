
import Swal from 'sweetalert2'
const AddCoffee = () => {
 
  
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;


        const newCoffee = { name, quantity, supplier, taste, category, details, photoURL }


        // sent data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Coffee has been successfully added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (

        <>
        
            <div>
                <h2> This is add coffee page</h2>
                <div className="w-[50%] mx-auto mt-10 bg-orange-200">
                    <form className="p-4" onSubmit={handleAddCoffee}>
                        {/* form name and quantity row */}
                        <div className="md:flex gap-4 ">
                            <label className="input input-bordered flex items-center gap-2">
                                Name
                                <input type="text" name="name" className="w-full" placeholder="Coffee Name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Quantity
                                <input type="number" name="quantity" className="w-full" placeholder="Available Quantity" />
                            </label>
                        </div>

                        {/* form supplier and taste row */}
                        <div className="md:flex gap-4 py-4">
                            <label className="input input-bordered flex items-center gap-2">
                                Supplier Name
                                <input type="text" name="supplier" className=" w-full" placeholder="Supplier name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Taste
                                <input type="text" name="taste" className=" w-full" placeholder="Taste" />
                            </label>
                        </div>


                        {/* form category and details row */}
                        <div className="md:flex gap-4 py-4">
                            <label className="input input-bordered flex items-center gap-2">
                                category
                                <input type="text" name="category" className=" w-full" placeholder="category" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Details
                                <input type="text" name="details" className=" w-full" placeholder="category details" />
                            </label>
                        </div>

                        {/* form photo URL row */}
                        <div className=" gap-4 py-4 w-full">
                            <label className="input input-bordered flex items-center gap-2">
                                Photo URL
                                <input type="text" name="photoURL" className="grow w-full" placeholder="PhotoURL" />
                            </label>

                        </div>
                        {/* submit button */}
                        <input type="submit" value="Add Coffee" className="btn btn-block"></input>
                    </form>
                </div>

            </div>
        </>

    );
};

export default AddCoffee;

// url

// https://i.ibb.co.com/M8ZfkBh/1.png
// https://i.ibb.co.com/QF8sFC4/2.png
// https://i.ibb.co.com/s99cd1t/3.png
// https://i.ibb.co.com/DrGfP4n/4.png
// https://i.ibb.co.com/JCxjykL/5.png
// https://i.ibb.co.com/V9HzysZ/6.png