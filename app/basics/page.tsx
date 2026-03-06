export default function Basics() {
    return(
        <>
            <h1 className="text-xl md:text-2xl font-semibold">Basics</h1>

        <div className="pt-[15px]">
            <ul className="pl-[10px]">
                <li className="text-sm list-disc leading-[2]">All HTML documents must have a document type declaration: <code className="text-sm bg-gray-500 text-red-700 py-[4px]">&lt;!DOCTYPE html&gt;</code></li>
                <li className="text-sm list-disc pt-[5px] md:pt-[15px] leading-[2]">The HTML document must begin with <code className="text-sm bg-gray-500 text-red-700 py-[4px]">&lt;html&gt;</code> and ends with <code className="text-sm bg-gray-500 text-red-700 py-[4px]">&lt;/html&gt;</code></li>
                <li className="text-sm list-disc pt-[5px] md:pt-[15px] leading-[2]">What people will see is located between <code className="text-sm bg-gray-500 text-red-700 py-[4px]">&lt;body&gt;</code> and <code className="text-sm bg-gray-500 text-red-700 py-[4px]">&lt;/body&gt;</code> </li>
            </ul>

            {/* example */}

            <p className="pt-[15px]">Example</p>
            <div className="bg-gray-500 mt-[10px] max-w-fit pr-[10rem] pl-[1rem] border-l-[5px] border-indigo-600">
                <code className="text-sm bg-gray-500 text-gray-400 py-[4px]">
                    &lt;!DOCTYPE html&gt;
                </code>
                <code className="text-sm bg-gray-500 text-red-700 py-[4px]"> 
                    <br/> &lt;html&gt;
                    <br/>&lt;body&gt;
                    <br/>
                    <br/>
                    &lt;h1&gt; <span className="text-black">Heading</span> &lt;/h1&gt;
                    <br/>&lt;p&gt; <span className="text-black">Paragraph</span> &lt;p&gt;
                    <br/>
                    <br/>
                    &lt;/body&gt;
                    <br/>&lt;/html&gt;
                </code>
            </div>
            
            <p className="py-[15px]">About &lt;!DOCTYPE&gt; Declarartion</p>
            <ul className="pl-[10px]">
                <li className="list-decimal text-sm leading-[2]">It represents the document type, and helps browsers to display web pages correctly</li>
                <li className="list-decimal text-sm leading-[2]">It must only appear once at the top of the page</li>
                <li className="list-decimal text-sm leading-[2]">It is not case sensitive</li>
                
            </ul>
        </div>
        </>
    );
}