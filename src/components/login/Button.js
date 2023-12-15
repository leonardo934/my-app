'use client'

export function Button(props) {
    console.log(props.text)
    return (
        <button
            type="submit"
                className={`flex justify-center rounded-xl ${props.color} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:{props.hover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
           {props.text}
        </button>
    )
}
 