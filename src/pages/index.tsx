import React, { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  text: string;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    // setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(errors);
  return (
    <div className={`grid gap-y-16 overflow-hidden bg-background`}>
      <div className={`relative h-screen`}>
        <Header setIsOpen={setIsOpen} />
        {/* <ContactUsForm isOpen={isOpen} /> */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-10 inset-0 overflow-y-auto "
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

            <div className="relative bg-background w-[32rem] rounded max-w-sm mx-auto text-gray-300 p-4">
              <Dialog.Title className="text-2xl mb-6">CONTACT US</Dialog.Title>
              <Dialog.Description>
                <form onSubmit={onSubmit}>
                  <div className="mb-7">
                    <label
                      htmlFor="firstName"
                      className={`block font-bold text-sm mb-1 ${
                        errors.firstName ? 'text-red-400' : 'text-gray-200'
                      }`}
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                        errors.firstName
                          ? 'text-red-300 border-red-400'
                          : 'text-gray-200 border-gray-400'
                      }`}
                      {...register('firstName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                  </div>
                  <div className="mb-7">
                    <label
                      htmlFor="lastName"
                      className={`block font-bold text-sm mb-1 ${
                        errors.lastName ? 'text-red-400' : 'text-gray-200'
                      }`}
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      // name="email"
                      id="lastName"
                      // placeholder="hey@chrisoncode.io"
                      className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                        errors.lastName
                          ? 'text-red-300 border-red-400'
                          : 'text-gray-200 border-gray-400'
                      }`}
                      {...register('lastName', {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                  </div>
                  <div className="mb-7">
                    <label
                      htmlFor="email"
                      className={`block font-bold text-sm mb-1 ${
                        errors.email ? 'text-red-400' : 'text-gray-200'
                      }`}
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      // name="email"
                      id="email"
                      // placeholder="hey@chrisoncode.io"
                      className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                        errors.email
                          ? 'text-red-300 border-red-400'
                          : 'text-gray-200 border-gray-400'
                      }`}
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        A valid email is required.
                      </p>
                    )}
                  </div>
                  <div className="mb-7">
                    <label
                      htmlFor="tel"
                      className={`block font-bold text-sm mb-1 ${
                        errors.tel ? 'text-red-400' : 'text-gray-200'
                      }`}
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      // name="email"
                      id="tel"
                      // placeholder="hey@chrisoncode.io"
                      className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                        errors.tel
                          ? 'text-red-300 border-red-400'
                          : 'text-gray-200 border-gray-400'
                      }`}
                      {...register('tel', { required: false })}
                    />
                  </div>
                  <div className="mb-9">
                    <label
                      htmlFor="text"
                      className={`block font-bold text-sm mb-1 ${
                        errors.text ? 'text-red-400' : 'text-gray-200'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      // type="textarea"
                      rows={2}
                      // name="email"
                      id="text"
                      // placeholder="hey@chrisoncode.io"
                      className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                        errors.text
                          ? 'text-red-300 border-red-400'
                          : 'text-gray-200 border-gray-400'
                      }`}
                      {...register('text', { required: false })}
                    />
                  </div>
                  <button className="inline-block bg-gray-100 text-gray-800 rounded shadow py-2 px-5 text-sm">
                    Submit
                  </button>
                </form>
              </Dialog.Description>

              {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button> */}
            </div>
          </div>
        </Dialog>

        <MainHero />
        <Canvas />
        {/* </div> */}
        {/* </div> */}
        {/* <MainHeroImage /> */}
        {/* </div> */}
      </div>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Nunito', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;
