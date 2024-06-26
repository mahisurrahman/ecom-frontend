

import { useEffect, useState } from "react";
import useRequest from "../../ApiServices/useRequest";
import AdminDashChart from "../../Components/AdminComponents/AdminDashChart/AdminDashChart";
import AdminOrderStatus from "../../Components/AdminComponents/AdminOrderStatus/AdminOrderStatus";
import AdminProfileSummary from "../../Components/AdminComponents/AdminProfileSummary/AdminProfileSummary";
import AdminTodaysOrders from "../../Components/AdminComponents/AdminTodaysOrders/AdminTodaysOrders";
import AdminTopProducts from "../../Components/AdminComponents/AdminTopProducts/AdminTopProducts";

const AdminProfile = () => {
  const [postRequest, getRequest] = useRequest();
  const [allOrders, setAllOrders] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allAvailableProducts, setAllAvailableProducts] = useState([]);

  const getAllOrders = async()=>{
    try{
      const ordersList = await getRequest('/orders/src/all');
      setAllOrders(ordersList?.data?.data);
    }catch(error){
      console.log(error);
    }
  }

  const getAllUsers = async()=>{
    try{
      const usersList = await getRequest('/users/src');
      setAllUsers(usersList?.data?.data);
    }catch(error){
      console.log(error);
    }
  }

  const getAllProducts = async()=>{
    try{
      const productsList = await getRequest('/products/src/all');
      setAllProducts(productsList?.data?.data);
    }catch(error){
      console.log(error);
    }
  }

  const getAvailableProducts = async () =>{
    try{
      const availableProductsList = await getRequest('/products/src');
      console.log(availableProductsList?.data?.data)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllOrders();
    getAllUsers();
    getAllProducts();
    getAvailableProducts();
  },[])
  
  return (
    <div className="h-[85vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-scrollbar-thumb">
     <AdminProfileSummary allOrders={allOrders} allUsers={allUsers} allProducts={allProducts}/>
     <AdminOrderStatus/>
     <AdminTodaysOrders/>
     <div className="mt-10 px-10 py-10 bg-white rounded-lg shadow-lg grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <AdminDashChart/>
        </div>
        <div className="col-span-4">
          <AdminTopProducts/>
        </div>
     </div>
    </div>
  );
};

export default AdminProfile;
