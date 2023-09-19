import { useReducer } from "react";
type State = {
    firstName: string,
    lastName: string,
    address: string,
    email: string
}
type Action = {
    type: | "firstName" | "lastName" | "address" | "email";
    payload: string;
}

const initialText = {
    firstName: "",
    lastName: "",
    address: "",
    email: ""
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "firstName":
            return { ...state, firstName: action.payload }
        case "lastName":
            return { ...state, lastName: action.payload }
        case "address":
            return { ...state, address: action.payload }
        case "email":
            return { ...state, email: action.payload }
        default:
            return state;
    }
}
const UseReducerType = () => {
    const [state, dispatch] = useReducer(reducer, initialText)

    const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("object");

        const firstName = (e.currentTarget.elements.namedItem('firstName') as HTMLInputElement).value
        const lastName = (e.currentTarget.elements.namedItem('lastName') as HTMLInputElement).value
        const address = (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value
        const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value

        dispatch({ type: "firstName", payload: firstName });
        dispatch({ type: "lastName", payload: lastName });
        dispatch({ type: "address", payload: address })
        dispatch({ type: "email", payload: email })

    }
    console.log(state.email)
    return (
        <div className="my-20">

            <div className="text-center text-blue-700 my-10 text-lg bg-gray-200 w-fit p-5 mx-auto">
                <h1>Name: {state.firstName} {state.lastName}</h1>
                <p>Address: {state.address}</p>
                <p>Email : {state.email}</p>
            </div>

            <form onClick={(e) => handleFromSubmit(e)} className="max-w-4xl mx-auto bg-gray-200 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label>First Name</label>
                        <input className="border border-black px-3 py-2" type="text" name="firstName" id="" placeholder="first name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name</label>
                        <input className="border border-black px-3 py-2" type="text" name="lastName" id="" placeholder="last name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Address</label>
                        <input className="border border-black px-3 py-2" type="text" name="address" id="" placeholder="Address" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input className="border border-black px-3 py-2" type="text" name="email" id="" placeholder="email" />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <input className="px-5 py-2 text-white rounded text-lg bg-black" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UseReducerType;