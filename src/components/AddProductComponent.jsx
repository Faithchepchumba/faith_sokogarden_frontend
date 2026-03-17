import axios from "axios";
import { useState } from "react";

const AddProductComponent =()=> {
    let[product_name, setProductName] =useState("");
    let[product_description, setProductDescription] =useState("");
    let[product_cost, setProductCost]= useState("");
    let[product_category, setProductCategory] =useState("");
    let[product_image, setProductImage] =useState("");

    let[loading, setLoading]=useState("");
    let[error, setError]=useState("");
    let[success, setSuccess]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault()

        setError("");
        setSuccess("");
        setLoading("Please...");

        try {
            // box /envelope to put product data in for transmission
            const product_data = new FormData();
            // add end product niformation needed to the box
            product_data.append("product_name",product_name);
            product_data.append("product_description",product_description);
            product_data.append("product_cost",product_cost);
            product_data.append("product_category",product_category);
            product_data.append("product_image",product_image);
            // use axios (messenger) to send the data to the server
            const response =await axios.post("https://faith.alwaysdata.net/api/add_product",product_data);
            console.log(response);
            if (response.status === 200) {
                setLoading("");
                setSuccess(response.data.message);

                // clear the form
                setProductName("");
                setProductDescription("");
                setProductCost("");
                setProductCategory("");
                setProductImage("");
            }
        } catch (error) {
            setError(error.message);
            setLoading("");
            
        }

        

    }
    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warining">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter Product Name"
                      required
                      onChange={(e)=>{setProductName(e.target.value)}}
                      value={product_name}
                    />
                    <br />
                    <textarea
                    rows="7"
                    className="form-control"
                    placeholder="Enter product description"
                    required
                    onChange={(e)=>{setProductDescription(e.target.value)}}
                    value={product_description}
                    >
                    </textarea>
                     <br />

                    <input type="number" 
                    className="form-control" 
                    placeholder="Enter product cost"
                    required 
                    onChange={(e)=>{setProductCost(e.target.value)}}
                    value={product_cost}
                    />
                    
                    <br />

                    <label htmlFor="" className="form-label">Product Category</label>
                    <select
                    className="form-select"
                    placeholder="Enter category"
                    required
                    
                    onChange={(e)=>{setProductCategory();

                    }}
                    >
                    <option value="">Select Category</option>
                    <option value="Television">Tv</option>
                    <option value="phones">phones</option>
                    <option value="laptops">Laptops</option>
                    <option value="accessories">Accessories</option>
                    
                    </select>
                        <br />

                        <label htmlFor="" className="form-label">Product Image</label>
                    <input type="file" 
                    className="form-control"
                    placeholder="Enter image"
                    required
                    accept="image/*"
                    onChange={(e)=>{setProductImage(e.target.files[0])}}/>
                    <br />
                  
                  <button className="btn btn-dark">Add Products</button>
                </form>

            </div>
            
        </div>
    )
    
    
}

export default AddProductComponent;