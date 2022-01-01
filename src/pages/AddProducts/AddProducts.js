import React from "react";
import { axios } from "axios";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/addProduct", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Product added successfully");
        reset();
      }
    });
  };
  return (
    <>
      <div className="py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <h4 className="text-danger">Added Your Favorite Products</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control mb-3"
                  {...register("name")}
                  placeholder="Product Name"
                  required
                />
                <input
                  className="form-control mb-3"
                  {...register("img")}
                  placeholder="image_url"
                  required
                />
                <input
                  className="form-control mb-3"
                  type="number"
                  {...register("price")}
                  placeholder="Price"
                  required
                />
                <textarea
                  rows="4"
                  className="form-control mb-3"
                  {...register("description")}
                  placeholder="description"
                  required
                />
                <input className="btn btn-primary w-25 fw-bold" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
