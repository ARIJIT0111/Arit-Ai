//Custom code block component with syntax highlighting and copy-to-paste clipboard functionality

import { useState } from "react";
const Codeblock =({inline, classNmae, children,...props})=>{

    //State for copy button feedback
    const[copied, setCopied]=useState(false)

    //Extract language from classname (e.g. "language-javascript")
    const match = /language-(\w+)/.exec(classNmae || '');

    //Ensure code content is a string
    const codeText = Array.isArray(children) ? children.join('') : children;

    //copy code to clpiboard with vidual feedback

    const handleCopy = ()=>{
        if (typeof navigator !=='undefined'){
            navigator.clipboard.writeText(codeText || "");
            setCopied (true);
            setTimeout(()=>setCopied(false),1000);
        }
    }
    //Render block code with syntax highlihting and copy button
    if(!inline && match){
        return(
            <div className="relative group mb-4">
                {/* Code blok container with horizontal scrolling*/}

        <pre className="bg-zinc-900/70 border border-zinc-700 rounded-lg p-4 overflow=x=auto">

            <code className={classNmae} {...props}>
                {children}
            </code>
        </pre>

        {/* Copy button - appear on hover*/}
        <button type='button' onClick={handleCopy} className="absolute top-2 right-2 px-2 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-300 hover:bg-zinc-700 focus:outline-none shadow-sm transition-opacity opacity-0 group-hover:opacity-100">

        {copied?'Copied':'Copy'}
        </button>
    </div>
        )
    }

    //rendern inline code (fallback for single backtricks)
    return(
        <code className="bg-zinc-800 px-1.5 py-0.5 text-zinc-200" {...props}>
            {children}
        </code>
    )

}

export default Codeblock;