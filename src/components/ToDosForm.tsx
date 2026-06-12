import Card from "./shared/Card";
import Button from "./shared/Button";
import { useEffect, useState } from "react";
import { useWorkContext } from "../hooks/useWorkContext";

function ToDosForm() {
    const [text, setText] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const { add_To_Work, edit, update_Work } = useWorkContext();

    useEffect(() =>{
        if(edit.edit && edit.item){
            setText(edit.item.text)
        }
    }, [edit])

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setShowMessage(value.trim().length > 0 && value.trim().length < 10);
        setText(value);
    };


    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.trim().length === 0 || text.trim().length < 10) {
            window.alert("text must be atleast 10 character long")
        } else {
            (edit.edit && edit.item) ? update_Work(edit.item?.id, text) : add_To_Work(text)
        }
        setText("")
    };


    return (
        <Card>
            <div className="flex gap-3 flex-col">
                <h1 className="m-auto">
                    What are you thinking to complete next.
                </h1>

                <form onSubmit={handleSubmit} className="flex gap-4 flex-col" >
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        className="bg-gray-100 w-3/4 m-auto px-3 py-2 rounded-lg text-black font-bold outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="what are you thinking to do next"
                    />

                    {showMessage && (<p className="text-xl m-auto my-1">😉 Think more dude!</p>)}

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Card>
    );
}

export default ToDosForm;