'use client'


export function Input(props) {
  return (
    <>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
        {props.name}
      </label>
      <div className="mt-2">
        <input
          id={`${props.type}`}
          name={`${props.type}`}
          type={`${props.type}`}
          autoComplete={`${props.type}`}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  )
}
