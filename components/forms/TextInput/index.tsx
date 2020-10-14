import React, {useRef} from "react";
import useTheme from "../../../util/useTheme";

interface Props {
    value?: string;
    onChange?: () => void;
    placeholder?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    type?: string;
    autoComplete?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean
}

const TextInput: React.FC<Props> = ({label, error, helperText, required, ...props}) => {

    const elementId = useRef(null)

    const classNames = `border-gray-300 text-gray-800 placeholder-gray-300 focus:${useTheme("primary", "border", 400)} focus:${useTheme("primary", "shadowOutline")}`
    const errorClassnames = "border-red-300 text-red-800 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red"


    return <div className="text-left">
        <label htmlFor={elementId.current} className="block text-sm font-medium leading-5 text-gray-700">{label}</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input {...props} required={required} ref={elementId} className={`p-2.5 text-sm rounded-md border 
            focus:outline-none w-full transition-shadow duration-150 ${error ? errorClassnames : classNames}`}/>

            {error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"/>
                </svg>
            </div>}

        </div>
        {helperText && <p className={`mt-2 text-sm ${error ? "text-red-600" : "text-gray-400"}`}>
            {helperText}
        </p>}

    </div>
}

export default TextInput