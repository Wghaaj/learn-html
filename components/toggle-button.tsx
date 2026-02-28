"use client";
import { LuAlignCenter } from "react-icons/lu";

export default function ToggleButton({ onToggle }: { onToggle: () => void }) {
    return (
        <button 
            onClick={onToggle} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle Sidebar"
        >
            <LuAlignCenter size={25} />
        </button>
    );
}