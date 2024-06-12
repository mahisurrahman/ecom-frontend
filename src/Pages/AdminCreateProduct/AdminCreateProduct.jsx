import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AdminCreateProduct = () => {
  const { allCategories, loading, setLoading } = useContext(AuthContext);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodThumb, setProdThumb] = useState(null);
  const [prodThumbPreview, setProdThumbPreview] = useState(null);
  const [prodImg, setProdImg] = useState([]);
  const [prodImgPreview, setProdImgPreview] = useState(null);
  const [buyingPrice, setBuyingPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [categoryId, setCategoryId] = useState(null);

  const handleThumbChange = (e) => {
    setLoading(true);
    const selectedImage = e.target.files[0];
    console.log("Imagesssss", selectedImage);
    if (selectedImage) {
      setProdThumbPreview(URL.createObjectURL(selectedImage));
      console.log(selectedImage);
      setProdThumb(selectedImage);
      setLoading(false);
    }
  };

  const handleCreateProducts = (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const formData = new FormData();
      formData.append("productName", prodName);
      formData.append("productDescription", prodDescription);
      formData.append("productThumb", prodThumb);
      formData.append("productImg", prodImg);
      formData.append("buyingPrice", buyingPrice);
      formData.append("sellingPrice", sellingPrice);
      formData.append("discount", discount);
      formData.append("categoryId", categoryId);

      const form = event.target;
      const productName = form.productName.value;
      const productCategory = form.productCategory.value;

      console.log(productName, productCategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-10 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-extrabold border-l-4 pl-10 border-l-lime-400">
        Create Product
      </h1>

      <div className="mt-5">
        <form
          onSubmit={handleCreateProducts}
          className="mx-10 mt-10 px-10 py-10 border-2 rounded-lg shadow-lg"
        >
          <div className="flex items-start w-full gap-5">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="productName">
                Product Name
              </label>
              <input
                className="px-4 py-2 mt-2 border-2 border-gray-400 w-full rounded-lg shadow-md focus:outline-none"
                type="text"
                name="productName"
                placeholder="product name"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="productCategory">
                Product Category
              </label>
              <select
                className="px-4 py-3 mt-2 border-2 w-full rounded-lg focus:outline-none"
                name="categoryId"
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {allCategories.map((category) => (
                  <option key={category.categoryCode} className="uppercase" value={category.categoryCode}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-start w-full gap-5 mt-5">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="buyingPrice">
                Buying Price
              </label>
              <input
                className="px-4 py-2 mt-2 border-2 w-full rounded-lg border-gray-400 shadow-md focus:outline-none"
                type="number"
                name="buyingPrice"
                placeholder="Buying Price"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="sellingPrice">
                Selling Price
              </label>
              <input
                className="px-4 py-2 mt-2 border-2 w-full border-gray-400 rounded-lg shadow-md focus:outline-none"
                type="number"
                name="sellingPrice"
                placeholder="Selling Price"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="sellingPrice">
                SDiscount
              </label>
              <input
                className="px-4 py-2 mt-2 border-2 w-full border-gray-400 rounded-lg shadow-md focus:outline-none"
                type="number"
                name="discount"
                placeholder="Discount"
              />
            </div>
          </div>
          <div className="flex items-start gap-5 w-full mt-5">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm" htmlFor="discount">
                Product Description
              </label>
              <textarea
                className="px-4 py-2 h-[10vh] mt-2 border-2 w-full rounded-lg border-gray-400 shadow-md focus:outline-none"
                type="text"
                name="productDescription"
                placeholder="Product Description"
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-5 w-full mt-10">
            <div className="flex flex-col items-start">
              <label className="text-xs mb-3" htmlFor="productThumb">
                Thumbnail Upload
              </label>
              <input
                id="productThumb"
                className="w-full text-lg text-black"
                type="file"
                accept="image/*"
                onChange={handleThumbChange}
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-xs mb-3" htmlFor="productImg1">
                Image 01 (Required)
              </label>
              <input
                id="productImg1"
                className="w-full text-lg text-black"
                type="file"
                accept="image/*"
                onChange={handleThumbChange}
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-xs mb-3" htmlFor="productImg2">
                Image 02 (Optional)
              </label>
              <input
                id="productImg2"
                className="w-full text-lg text-black"
                type="file"
                accept="image/*"
                onChange={handleThumbChange}
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-xs mb-3" htmlFor="productImg3">
                Image 03 (Optional)
              </label>
              <input
                id="productImg3"
                className="w-full text-lg text-black"
                type="file"
                accept="image/*"
                onChange={handleThumbChange}
              />
            </div>
          </div>
          <div className="mt-10">
            <input
              className="w-full bg-fourth text-md tracking-wider font-extrabold py-2 rounded-lg shadow-lg text-white border-4 border-transparent duration-700 hover:duration-700 hover:bg-white hover:border-fourth hover:text-black hover:cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateProduct;
