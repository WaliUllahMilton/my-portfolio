import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = {
      ...formData,
      access_key: "f1ad8913-0495-42a3-afb9-496dd4c6ffd2"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formDataToSend)
      });

      const response = await res.json();
      
      if (response.success) {
        console.log("Form submitted successfully:", response);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error("Form submission failed:", response.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='max-w-container text-base font-jet font-normal mx-auto flex py-20'>
      <div>
      <p className='w-[500px] mb-10 text-white font-bold '>
        I am available for freelance work. Connect with me via phone: +8801601110774 or email: waliullahmiltoncse@gmail.com
      </p>
      <form onSubmit={handleSubmit} className='flex items-center w-[500px] flex-col gap-4'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-[500px] bg-transparent border-2 border-[#01FE99] pl-4 py-2 rounded-xl text-white outline-none'
          placeholder='Your Name'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-[500px] bg-transparent border-2 border-[#01FE99] pl-4 py-2 rounded-xl text-white outline-none'
          placeholder='Your Email'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-[500px] bg-transparent border-2 border-[#01FE99] pl-4 py-2 rounded-xl text-white outline-none h-[120px]'
          placeholder='Your Message'
          cols='30'
          rows='10'
        ></textarea>
        <button
          type='submit'
          className='md:px-8 px-3 py-[10px] md:py-2 border-[#01FE99] border-[1px] rounded-[20px] text-[#01FE99] font-bold text-base w-[150px] hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500 ease-in-out'
        >
          Submit
        </button>
      </form>
      </div>
      <div className='h-5 w-[500px] bg-red-500'></div>
    </div>
  );
};

export default Contact;
