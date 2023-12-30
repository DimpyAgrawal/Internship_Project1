import React, { useState, useEffect } from 'react';
// import DeleteModal from './DeleteModal';


const DeleteModal = ({ onDelete, id, showDelete }) => {
    const handleDelete = () => {
        onDelete(id);
        showDelete();
    };
    console.log("hhh ", onDelete, id, showDelete);
    return (
        <>
        <div onClick={()=>showDelete()} className='inset-0 top-0 left-0 fixed  z-50 w-[100vw] h-[100vh] border-4 bg-gray-900  opacity-20 border-black'>
        </div>
            <div  className="bg-gray-50 m-auto z-50 fixed top-[40%] left-[40%] justify-center items-center ">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button onClick={()=>showDelete()} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button onClick={()=>showDelete()} data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancel
                            </button>
                            <button type="submit" onClick={handleDelete} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Yes, I'm sure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const Item = ({ item, onDelete, onEdit }) => {
    const [showDelete, setShowDelete] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(item.text);

    const handleDelete = () => {
        setShowDelete(true);
    };

    const toggleDeletMode = ()=>{
        setShowDelete(!showDelete)
    }
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(item.id, editedText);
        setIsEditing(false);
    };
    const handleImageClick = () => {
        window.open('https://support.bluesnap.com/docs/test-credit-card-numbers', '_blank');
      };
    return (
        <div className="p-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow p-5 w-[200px]">
                <>
                    <img className="rounded-t-lg" src={item.image} onClick={handleImageClick} alt={`Random ${item.id}`} />
                </>
                <div className="mt-2">
                    {isEditing ? (
                        <input
                            type="text"
                            className="mb-3 px-2 py-1 w-[160px] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {item.text}
                        </p>
                    )}
                    <div className="flex gap-2">
                        {isEditing ? (
                            <div>
                                <button
                                    className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button
                                    className="px-3 ml-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    onClick={() => handleDelete()}
                                >
                                    Delete
                                </button>
                                <button
                                    className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Render the DeleteModal component conditionally */}
            {console.log(onDelete)}
            {showDelete && (
                <DeleteModal
                    onDelete={onDelete}
                    id={item.id}
                    showDelete={toggleDeletMode}
                />
            )}
        </div>
    );
};

// ItemList component for rendering the list of items
const ItemList = ({ items, onDelete, onEdit }) => {
    return (
        <div className="flex flex-wrap w-[80vw] gap-6">
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default function App() {
    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
            const data = await response.json();
            setImageList(data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            const newItem = {
                id: Date.now(), // Use a unique identifier for each item
                text: inputList,
                image:
                    imageList.length > 0
                        ? imageList[oldItems.length % imageList.length].download_url
                        : '',
            };
            return [...oldItems, newItem];
        });
        setInputList('');
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((item) => item.id !== id);
        });
    };

    const editItem = (id, newText) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, text: newText };
            }
            return item;
        });
        setItems(updatedItems);
        setEditIndex(null);
    };

    return (
        <div className="p-4 sm:ml-64 bg-gray-100 overflow-x-hidden ">
            <div className="p-4 border-gray-200 dark:border-gray-700 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 pt-16 p-4 bg-gray-100">
                    <div className="max-w-sm ">
                        <div>
                            <input
                                className="mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Add an Item"
                                value={inputList}
                                onChange={itemEvent}
                            />
                           <button
                                className="mb-3 ml-3 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                onClick={inputList? listOfItems:""}
                            >
                                Add Card
                            </button>
                        </div>
                        <ItemList items={items} onDelete={deleteItems} onEdit={editItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}
