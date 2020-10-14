import TextInput from "../components/forms/TextInput";
import {useState} from "react";
import {createTheme} from "../util/createTheme";

export default function () {
    const [baseColor, setBaseColor] = useState("blue")

    return <div className="flex justify-center items-center h-screen">
        <div className="w-96">
            <TextInput label="Base Color" value={baseColor} onChange={event => setBaseColor(event.target.value)}/>
            <p className="border border-gray-300 whitespace-pre shadow-sm p-4 rounded-md w-full mt-4 text-sm">
                {JSON.stringify(createTheme(baseColor), null, 2)}
        </p>
        </div>

    </div>
}