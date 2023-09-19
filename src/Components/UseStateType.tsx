import { useState } from "react";

interface textType {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
}

const UseStateType = () => {

    const initialText = {
        firstName: "Nazmus",
        lastName: "sakib",
        address: "Dinajpur",
        email: "sakib@gmail.com"
    };

    const [text, setText] = useState<textType>(initialText)

   

    const handleFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setText((prevState) => {
            console.log(prevState.firstName);
          return {
            ...prevState,
            firstName: e.target.value,
          };
        });
      };

    return (
        <div className="my-20">

            <div className="text-center text-blue-700 my-10 text-lg bg-gray-200 w-fit p-5 mx-auto">
                <h1>Name: {text.firstName} {text.lastName}</h1>
                <p>Address: {text.address}</p>
                <p>Email : {text.email}</p>
            </div>

            <form className="max-w-4xl mx-auto bg-gray-200 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label>First Name</label>
                        <input onChange={(e)=>handleFirstName(e)} className="border border-black px-3 py-2" type="text" name="" id="" placeholder="first name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name</label>
                        <input className="border border-black px-3 py-2" type="text" name="" id="" placeholder="last name" />
                    </div>
                    <div className="flex flex-col">
                        <label>Address</label>
                        <input className="border border-black px-3 py-2" type="text" name="" id="" placeholder="Address" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input className="border border-black px-3 py-2" type="text" name="" id="" placeholder="email" />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <input className="px-5 py-2 text-white rounded text-lg bg-black" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UseStateType;