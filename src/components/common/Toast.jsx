import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: ' #cbded3',
          color: '#ffffff',
          border: '1px solid  #9fbaae',
        },
      }}
    />
  );
};

export default Toast;
