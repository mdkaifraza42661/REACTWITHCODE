import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateTodo} from '../Feature/Todo/TdoSlice';

function UpdateTodo({todo}) {
    const [newText, setNewText] = useState('');
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        if(newText.trim() !== '') {
            dispatch(updateTodo({id: todo.id, text: newText.trim()}));
            setNewText('');
        }
    };

    return (
        <form onSubmit={handleUpdate} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <input
                type="text"
                className="text-white bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter new text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
            >
                Update
            </button>
        </form>
    );
}

export default UpdateTodo;
