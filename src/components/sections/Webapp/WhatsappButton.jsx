import React from 'react'

// components/WhatsappButton.js
const WhatsappButton = () => {
    const handleClick = () => {
      window.location.href = 'https://wa.me/254742607434'// replace with your WhatsApp number
    };
  
    return (
      <button
        className="cursor-pointer font-semibold overflow-hidden  z-100 border border-green-500 group px-8 py-2 whatsapp-button md:animate-bounce"
        onClick={handleClick}
      >
         <div class="svg-wrapper-1">
    <div class="svg-wrapper">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
>
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path
    fill="currentColor"
    d="M12.001 1.999c5.523 0 10.001 4.478 10.001 10.001 0 5.523-4.478 10.001-10.001 10.001-1.747 0-3.415-.463-4.875-1.339L2.999 22l1.337-4.123A10.015 10.015 0 011.999 12c0-5.523 4.478-10.001 10.001-10.001zm0-1.999c-6.627 0-12.001 5.373-12.001 12.001 0 2.217.599 4.289 1.646 6.055l-1.631 5.031c-.227.699.455 1.381 1.154 1.154l5.03-1.631A12.014 12.014 0 0012 24c6.627 0 12.001-5.373 12.001-12.001 0-6.628-5.374-12.001-12.001-12.001zM15.5 13.968c-.136.383-.691.698-1.084.791-.39.09-.859.162-2.629-.546-2.214-.882-3.644-3.797-3.754-3.987-.11-.19-.896-1.19-.896-2.269s.55-1.584.747-1.792c.195-.21.427-.263.568-.263.143 0 .285.002.408.008.132.007.309-.05.487.373.195.457.666 1.585.726 1.699.059.115.098.253.018.405-.078.152-.119.248-.239.378-.119.131-.251.308-.358.414-.119.119-.244.249-.107.488.136.238.605.992 1.299 1.608.893.798 1.645 1.048 1.881 1.168.238.119.377.107.51-.065.134-.173.595-.696.754-.937.157-.24.313-.2.528-.12.214.078 1.351.637 1.584.754.233.119.389.178.447.275.06.098.06.57-.077.953z"
  ></path>
</svg>

    </div>
  </div>
  <span className=''>Whatsapp Chat</span>
      </button>
    );
  };  
  
  export default WhatsappButton;
  