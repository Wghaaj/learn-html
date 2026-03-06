import {
    Table, 
    TableHeader,
    TableBody,
    TableColumn,
    TableRow, 
    TableCell,
    getKeyValue,
} from "@heroui/table"

export default function Elements() {
    const rows = [
        {
            key: "1",
            name: "lalala",
            role: "role lalala",
            status: "Active",
        },
        {
            key: "2",
            name: "lalala2",
            role: "role lalala2",
            status: "Paused",
        },
        {
            key: "3",
            name: "lalala3",
            role: "role lalala3",
            status: "Vacation",
        },

    ];

    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "role",
            label: "ROLE",
        },
        {
            key: "status",
            label: "STATUS",
        },
    ];
    return(
        <>
            <h1 className="text-xl md:text-2xl font-semibold">Elements</h1>

            <div className="pt-[15px]">
                <p className="text-sm"> The HTML element is everything from the start tag to the end tag: </p>
                <code className="text-sm bg-gray-500 text-red-700 py-[4px] leading-[3]">
                    &lt;tag&gt;<span className="text-black">content</span> &lt;/tag&gt;
                </code>

                
            </div>
        
        </>
    );
}