import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

type Product = {
  id: string;
  price: string;
  product: string;
};
function FetchApi() {
  const [data, setData] = useState<Product[]>();
  const apiCall = async () => {
    try {
      const response = await fetch(
        'https://64bc21c57b33a35a444711cc.mockapi.io/products'
      );
      const res = await response.json();
      setData(res);
      toast.success('Fectchd Data Successfully', {
        position: 'bottom-center',
        theme: 'colored',
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    } catch (error) {
      toast.error('Failed to fetch data', {
        position: 'bottom-center',
        theme: 'colored',
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <h1>Fetch API Page</h1>
      <div className="flex flex-row bg-red-500">
        <ToastContainer />
        {data?.map((product: Product) => <p>{product.product}</p>)}
      </div>
    </>
  );
}

export default FetchApi;
