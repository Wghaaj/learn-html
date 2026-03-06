import Link from "next/link";

export default function Sidebar() {
    return(
        <>
        <aside className="bg-mist-900 p-[10px] md:p-[15px] w-[15rem] h-screen fixed top-0 whitespace-nowrap overflow-y-auto border-r border-white">
            <p className="text-xs text-gray-400 pb-[8px] md:pb-[10px]">Getting Started</p>
            <Link href="/" className="text-sm md:text-base">Learn HTML</Link>
            <hr className="mt-[10px]"></hr>
            <p className="text-xs text-gray-400 py-[15px] md:py-[20px]">HTML Rules</p>
            
            {/* Links */}
            <div className="pb-[1rem]">
                <Link href="/basics" className="text-xs md:text-sm">Basics</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/elements" className="text-xs md:text-sm">Elements</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/attributes" className="text-xs md:text-sm">Attributes</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/headings" className="text-xs md:text-sm">Headings</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/paragraphs" className="text-xs md:text-sm">Paragraphs</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/styles" className="text-xs md:text-sm">Styles</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/formatting" className="text-xs md:text-sm">Formatting</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/quotations" className="text-xs md:text-sm">Quotations</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/comments" className="text-xs md:text-sm">Comments</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/usingCss" className="text-xs md:text-sm">Using CSS</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/links" className="text-xs md:text-sm">Links</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/images" className="text-xs md:text-sm">Images</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/favicon" className="text-xs md:text-sm">Favicon</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/pageTitle" className="text-xs md:text-sm">Page Title</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/tables" className="text-xs md:text-sm">Tables</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/lists" className="text-xs md:text-sm">Lists</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/blockInline" className="text-xs md:text-sm">Block/Inline Elements</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/divElements" className="text-xs md:text-sm">Div Elements</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/classes" className="text-xs md:text-sm">Classes</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/id" className="text-xs md:text-sm">ID</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/buttons" className="text-xs md:text-sm">Buttons</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/iframes" className="text-xs md:text-sm">Iframes</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/javaScript" className="text-xs md:text-sm">JavaScript</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/filePaths" className="text-xs md:text-sm">File Paths</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/head" className="text-xs md:text-sm">Head</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/layout" className="text-xs md:text-sm">Layout</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/responsive" className="text-xs md:text-sm">Responsive</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/computercode" className="text-xs md:text-sm">Computercode</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/semantics" className="text-xs md:text-sm">Semantics</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/styleGuide" className="text-xs md:text-sm">Style Guide</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/entities" className="text-xs md:text-sm">Entities</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/symbols" className="text-xs md:text-sm">Symbols</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/emojis" className="text-xs md:text-sm">Emojis</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/urlEncode" className="text-xs md:text-sm">URL Encode</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/xhtml" className="text-xs md:text-sm">XHTML</Link>
            </div>

            <p className="text-sm md:text-base pt-[10px] md:pt-[15px] font-bold pb-[1rem]"> Forms</p>
            <div className="pb-[1rem]">
                <Link href="/forms" className="text-xs md:text-sm">Forms</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/formAttributes" className="text-xs md:text-sm">Form Attributes</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/formElements" className="text-xs md:text-sm">Form Elements</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/inputTypes" className="text-xs md:text-sm">Input Types</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/inputAttributes" className="text-xs md:text-sm">Input Attributes</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/inputFormAttributes" className="text-xs md:text-sm">Input Form Attributes</Link>
            </div>

            <p className="text-sm md:text-base pt-[10px] md:pt-[15px] font-bold pb-[1rem]">Graphics</p>
            <div className="pb-[1rem]">
                <Link href="/canvas" className="text-xs md:text-sm">Canvas</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/svg" className="text-xs md:text-sm">SVG</Link>
            </div>

            <p className="text-sm md:text-base pt-[10px] md:pt-[15px] font-bold pb-[1rem]">Media</p>
            <div className="pb-[1rem]">
                <Link href="/media" className="text-xs md:text-sm">Media</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/video" className="text-xs md:text-sm">Video</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/audio" className="text-xs md:text-sm">Audio</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/plugins" className="text-xs md:text-sm">Plug-ins</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/youtube" className="text-xs md:text-sm">YouTube</Link>
            </div>

            <p className="text-sm md:text-base pt-[10px] md:pt-[15px] font-bold pb-[1rem]">APIs</p>
            <div className="pb-[1rem]">
                <Link href="/webAPIs" className="text-xs md:text-sm">Web APIs</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/geolocation" className="text-xs md:text-sm">Geolocation</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/dragDrop" className="text-xs md:text-sm">Drag and Drop</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/webStorage" className="text-xs md:text-sm">Web Storage</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/webWorkers" className="text-xs md:text-sm">Web Workers</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/sse" className="text-xs md:text-sm">SSE</Link>
            </div>

            <p className="text-sm md:text-base pt-[10px] md:pt-[15px] font-bold pb-[1rem]">HTML References</p>
            <div className="pb-[1rem]">
                <Link href="/events" className="text-xs md:text-sm">Events</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/messages" className="text-xs md:text-sm">Messages</Link>
            </div>
            <div className="pb-[1rem]">
                <Link href="/methods" className="text-xs md:text-sm">Methods</Link>
            </div>
            



        </aside>
        </>
    );
}