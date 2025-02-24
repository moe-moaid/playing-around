import { useState } from 'react';

type InputProps = {
  type: 'text' | 'password';
  placeholder: string;
  required: boolean;
  name?: 'string';
};

function Input({ type, placeholder, required, name }: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [hasContent, setHasContent] = useState<boolean>(false);
  return (
    <>
      <div className="px-2 py-1 border-b border-s border-e border-t border-green-200 rounded-md relative transition duration-700 ease-in-out">
        <label
          className={`absolute start-2 ${isFocus || hasContent ? '-top-4 start-4 bg-white z-90 text-lime-500' : '-z-10'} transition all duration-700 ease-in-out`}
          htmlFor={`${name}`}
        >
          {placeholder}
          {required ? ' *' : ''}
        </label>
        <input
          className="outline-none z-90 bg-transparent w-full"
          name={name}
          type={type}
          required={required}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => {
            setHasContent(e.target.value.length > 0);
          }}
        />
      </div>
    </>
  );
}

export default Input;
