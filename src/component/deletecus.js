import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Modal } from "@mui/material";


export default function DeleteCustomer() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // let handleCancel = (e) => {
  //   e.preventDefault();

  //   // axios
  //   //   .post("http://localhost:8081/delete-order", {
  //   //     userId: props.userId,
  //   //     orderId: props.orderId,
  //   //     request: "CANCEL",
  //   //     orderType: props.orderType,
  //   //     symbol: props.symbol,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res.data);

  //   //     // window.alert(`Quantity for Order ID: ${props.orderId} has been cancelled.`);
  //   //     let arr = props.userOrder;
  //   //     arr[props.index].isCancelled = true;
  //   //     props.setUserOrder(arr);
  //   //     props.setisCancelled(true);
  //   //   })

  //   //   .catch((err) => {
  //   //     // console.log(err.response.data);
  //   //   });

  //   window.alert("Your Order has been Deleted");

  //   toggleModal();
  // };

  return (
    <>
     <Button type="submit" className="mt-4 mx-10"                    
                     value="Delete"
                      onClick={() => {
                        toggleModal();}}>
                      Delete
                    </Button>
<Modal>
Delete Confirmation
</Modal>
      {modal && (
        <div className="flex items-center justify-center w-full top-0 right-0 left-0 inset-0 fixed  ">
          <div
            onClick={toggleModal}
            className="bg-[rgba(49,49,49,0.8)] absolute w-full h-full inset-0 "
          ></div>
          <div
            className="rounded 
        bg-[#f1f1f1] max-w-[60%] md:w-fit
        pt-4 pb-6 px-8 z-50"
          >
            <form>
              <p className="text-gray-700 text-xl md:text-2xl font-semibold text-center">
                Delete Confirmation
                <div className="border-t-4 border-gray-700 flex  w-[40%] mb-4 mx-auto">
                  {" "}
                </div>
              </p>

              <div>
                <p className="text-center text-gray-600 font-medium ">
                  Are you sure you want to delete the value?
                </p>
              </div>

              <div className="flex items-center justify-around mt-6">
                <input
                  type="submit"
                  className=" px-2 md:px-4 py-1.5  font-bold shadow-lowshade bg-red rounded hover:scale-105 hover:bg-[#aa0000] min-w-fit w-2/5
              text-gray-200 cursor-pointer"
                  value="Delete"
                  // onClick={handleCancel}
                />

                <button
                  className="bg-gray-400  px-2 md:px-4 py-1.5 font-bold shadow-lowshade  rounded hover:scale-105 hover:bg-gray-500 min-w-fit w-2/5 cursor-pointer 
              text-gray-900 "
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
