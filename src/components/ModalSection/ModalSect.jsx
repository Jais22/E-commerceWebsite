import React, { useState } from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';


const ModalSect = () => {
        const [openModal, setOpenModal] = useState(false);
        const [orderDetails, setOrderDetails] = useState({
          fullName:"",
          address:"",
          mobileNumber:"",
          pincode:"",
        })
      
        function onCloseModal() {
          setOpenModal(false);
          setOrderDetails(" ");
        }
        const handleChange=(e)=>
        {
          setOrderDetails({...orderDetails,[e.target.name]:e.target.value});
          console.log(orderDetails);
        }
        const handleSubmit=(e)=>{
          e.preventDefault();
          if(!orderDetails.fullName|| !orderDetails.address||!orderDetails.pincode||!orderDetails.mobileNumber){
            return toast.error("All fields are required")
          }
          else{
            toast.success("order Successful");
            setOpenModal(false);
            setOrderDetails("");
          }

        }
  return (
    <>
      <Button
      className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
       onClick={() => setOpenModal(true)}>CheckOut</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
          <div>
              <div className="mb-2 block">
                <Label value="Your Full Name" />
              </div>
              <TextInput
                type='text'
                name='fullName'
                value={orderDetails.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Enter Full Address" />
              </div>
              <TextInput
              name='address'
              value={orderDetails.address}
               type="text"
               onChange={handleChange}
                required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your PinCode" />
              </div>
              <TextInput
              name='pincode'
                type='number'
                value={orderDetails.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your Mobile Number" />
              </div>
              <TextInput
              name='mobileNumber'
                type='number'
                value={orderDetails.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="w-full">
              <Button className='w-full'
               onClick={handleSubmit}>Order Now</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalSect