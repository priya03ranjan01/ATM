import React from 'react'
import { CustomerCard } from './card'
export const Customer = () => {
    return (
        <>
        <div class="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
            <CustomerCard cardName="Add Customer Details" 
            img="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // img="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                   />
            <CustomerCard cardName="View Customer Details" img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <CustomerCard cardName="Transactions" img="https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </>
    )
}
