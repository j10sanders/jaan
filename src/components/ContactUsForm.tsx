import React, { useState } from 'react';

import { Dialog } from '@headlessui/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  text: string;
};

type ContactUsFormProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const ContactUsForm = ({ isOpen, setIsOpen }: ContactUsFormProps) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    axios
      .post(
        'https://sheet.best/api/sheets/2e8c7856-5793-4bd1-8c76-7ce953ae9a50',
        { ...data }
      )
      .then((response) => {
        if (response.status === 200) setSuccess(true);
      })
      .catch((err) => console.log(err));
  });
  return (
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
            {!success ? (
              <form onSubmit={onSubmit}>
                <div className="mb-7">
                  <label
                    htmlFor="firstName"
                    className={`block font-bold text-sm mb-1 ${
                      errors.firstName ? 'text-red-400' : 'text-gray-200'
                    }`}
                  >
                    First name*
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
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
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
                    id="email"
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
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    id="tel"
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
                    rows={2}
                    id="text"
                    className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-500 focus:bg-gray-600 ${
                      errors.text
                        ? 'text-red-300 border-red-400'
                        : 'text-gray-200 border-gray-400'
                    }`}
                    {...register('text', { required: false })}
                  />
                </div>
                <button
                  className="inline-block bg-gray-100 text-gray-800 rounded shadow py-2 px-5 text-sm"
                  disabled={success}
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="inline-block text-blue-300 text-xl">
                Your details were submitted - talk to you soon
              </div>
            )}
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  );
};
