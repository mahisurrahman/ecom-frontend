import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const UserRefunds = () => {
    const {user, loading, setLoading} = useContext(AuthContext);
    const [refundedOrders, setRefundedOrders] = useState(null);

    const fetchRefundedOrders = () =>{
        try{

        }catch(error){
            console.log(error);
        }
    }


    return (
        <div className="bg-white rounded-lg px-10 py-10">
            <h1 className="text-2xl font-extrabold uppercase">Refunds of <span className="text-fourth">{user?.userFullName}</span></h1>
            <div className="mt-10 py-10 px-10 border rounded-lg">

            </div>
        </div>
    );
};

export default UserRefunds;