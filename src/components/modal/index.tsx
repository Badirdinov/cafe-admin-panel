import React from 'react';


//styles
import './modal.css'


interface IPropsModal  {
    title: string,
    children: React.ReactNode,
    close: ()=> void
}

const Modal = ({title, children, close}: IPropsModal) => {
    return (
        <div className='modal'>
            <div className='modal__item'>
                <span onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                          d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z"
                          fill="black"/>
                    </svg>
                </span>
                <h4 className='modal__title'>
                    {title}
                </h4>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
