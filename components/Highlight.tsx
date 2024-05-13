'use client'
import React, { useState } from 'react';
import Icon from './Icon'

type ModalProps = {
  children: React.ReactNode;
  toggleElement: React.ReactNode;
}

export default function HoverModal({ children, toggleElement }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-fit inline'>
      <div className='w-full inline relative'>
        <div className='w-full py-1 inline'>
          <div
            className='w-full inline cursor-pointer underline underline-offset-2 decoration-[--clr-green-base] decoration-2'
            onMouseEnter={showModal}
            onMouseLeave={hideModal}
          >
            {toggleElement}
          </div>

          {!isOpen &&
            <span
              className='z-40 inline whitespace-nowrap w-fit font-bold text-xs absolute left-0 
              right-0 top-[85%] bg-[--clr-green-base] text-white px-3 py-1 rounded-b-2xl rounded-r-2xl shadow-xl'
            >
              <Icon icon='Sun' className='fill-white'/>
            </span>
          }
        </div>

        {isOpen && (
          <div
            className={`z-50 absolute right-0 p-3 border-[1px] border-[--clr-base-accent] bg-[--clr-base] rounded-lg shadow-lg`}
            style={{ width: '300px', top: '95%' }}
          >
            <div className="flex flex-col text-base">
              {children}
            </div>
            <div className="modal-overlay"></div>
          </div>
        )}
      </div>
    </div>
  );
}
