/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import UserCartItems from '../../Components/UserCartItem/UserCartItems';
import { AuthContext } from '../../Providers/AuthProviders';

const UserCart = () => {
    const { allCarts, user } = useContext(AuthContext); 
   
    const getUserCartItems = async () => {
        try {
            // console.log(allCarts);
        
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getUserCartItems();
    }, [AuthContext,user,allCarts]);

    return (
        <div className="px-10 py-10 bg-white rounded-md">
            <div className="flex justify-center items-center font-bold text-2xl">
                <h1>My Carts</h1>
            </div>
            <div className='mt-10'>
                { allCarts.length> 0 ?
                    allCarts.map((item)=> <UserCartItems item={item} key={item._id} />)
                    :
                    <div className='h-[90vh] bg-white'><p>No Item Present In Your Cart</p></div>
                }
            </div>
        </div>
    );
};

export default UserCart;
