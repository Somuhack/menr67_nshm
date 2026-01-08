import React, { useState } from "react";
import { ProductAddApi } from "../../../Api/AllApi";
import { ToastContainer, toast } from "react-toastify";

const AddCake = () => {
  const [inputs, setInputs] = useState({
    pname: "",
    pprice: "",
    pdes: "",
    brandName: "",
    review: "",
  });
  const [img, setImage] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let fromdata = new FormData();
    fromdata.append("pname", inputs.pname);
    fromdata.append("pprice", inputs.pprice);
    fromdata.append("pdes", inputs.pdes);
    fromdata.append("brandName", inputs.brandName);
    fromdata.append("review", inputs.review);
    fromdata.append("pimage", img);
    try {
      const res = await ProductAddApi(fromdata);
      if (res.status == 200) {
        toast.success(res.data.msg);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setInputs({
      pname: "",
      pprice: "",
      pdes: "",
      brandName: "",
      review: "",
    });
    setImage(null)
  };

  return (
    <>
      <ToastContainer />

      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold">
              Add New Cake 🎂
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              encType="multipart/form-data"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cake Name</span>
                </label>
                <input
                  type="text"
                  name="pname"
                  value={inputs.pname}
                  onChange={handleChange}
                  placeholder="Enter cake name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="pprice"
                  value={inputs.pprice}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="pdes"
                  placeholder="Cake description"
                  value={inputs.pdes}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={inputs.brandName}
                  onChange={handleChange}
                  placeholder="Brand name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  type="text"
                  name="review"
                  value={inputs.review}
                  onChange={handleChange}
                  placeholder="Customer review"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cake Image</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="file-input file-input-bordered w-full"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Add Cake
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCake;
