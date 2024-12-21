import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Form from "./components/Form";
import Menampilkan from "./components/Menampilkan";

const defaultTodoItems = [];

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('todoItems');
        return savedItems ? JSON.parse(savedItems) : defaultTodoItems;
    });
    
    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(items));
    }, [items]);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function handleDeleteItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    }

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");

        if (savedMode) {
            const isDark = savedMode === "true";
            setDarkMode(isDark);
            if (isDark) document.documentElement.classList.add("dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(prefersDark);
            if (prefersDark) document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    };

  return (
    <section className="mt-[133px]">
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                <ToggleDarkMode isChecked={darkMode} onClick={toggleDarkMode}/>
                <div className="flex flex-col gap-6 p-4 w-full sm:w-[600px] lg:w-[800px] mx-auto rounded-lg shadow-lg bg-gradient-to-br from-brown-pod-300 to-brown-pod-700 shadow-brown-pod-500 dark:bg-gradient-to-br dark:from-brown-pod-600 dark:to-[#18181B]">
                    <h2 className="w-full mx-auto text-[26px] md:text-[28px] lg:text-3xl font-monst font-bold text-center text-brown-pod-50">Todo App</h2>
                    <Form onAddItem={handleAddItem}/>
                    <div className="w-full h-[2px] bg-brown-pod-900 dark:bg-brown-pod-50"></div>
                    <Menampilkan items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
                </div>
            </div>
        </div>
        <Footer />
    </section>
  );
}
