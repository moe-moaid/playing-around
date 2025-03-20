import Input from './Input';

function LoginForm() {
  // const promise = newPromise((resolve, reject) => {
  //   console.log(1);
  //   setTimeout(() => {
  //     console.log('timerStart');
  //     resolve('success');
  //     console.log('timerEnd');
  //   }, 0);
  //   console.log(2);
  // });
  // promise.then((res) => {
  //   console.log(res);
  // });
  // console.log(4);

  return (
    <div className="flex justify-center mt-24 width-[400px]">
      <form action="" className="w-[280px]">
        <div className="flex flex-col justify-start">
          <Input type="text" placeholder="userName" required={true} />
        </div>
        <div className="flex flex-col mt-4">
          <Input type="password" placeholder="password" required={true} />
        </div>
        <button
          className="mt-4 border border-green-200 rounded-md px-1 py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
