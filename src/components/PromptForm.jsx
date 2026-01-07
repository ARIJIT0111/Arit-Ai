// MAIN FORM COMPONENT FOR USER INPUT, MODEL SELECTION, AND FILE/IMAGE UPLOADS

// REACT COMPONENTS (FaBrain, FaImage, FaFileAlt, FaTrash, FaPaperPlane, FaRobot, FaTimes )

import { FaBrain, FaImage, FaFileAlt, FaTrash, FaPaperPlane, FaRobot, FaTimes} from 'react-icons/fa'

//REUSABLE UPLOAD BUTTON COMPONENT WITH HIDDEN FILE INPUT

const UploadButton=({Icon, inputRef, accept, onChange, title, iconClass})=>(
    <label className='inline items-center gap-2 px-3 py-2 bg-zinc-900/80 border border-zinc-700/50 rounded-xl text-sm text-zinc-200 shadow-inner cursor-pointer shrink-0 self-start' title={title}>
        <Icon className={`w-4 h-4 ${iconClass || ''}`} />
        <input type="file" ref={inputRef} accept={accept} onChange={onChange} className='hidden' />
        <span className="sr-only"> {title} </span>
    </label>

    //REUSABLE REMOVE/CLEAR BUTTON COMPONENT
)
    const RemoveButton=({})=>(
        <button className="p-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-zinc-300" type='button' onClick={onclick}>
            <Fatimes className='w-3 h-3' />

        </button>
)

//MAIN PROMPT FORM COMPONENT WITH TEXTT INPUT, FILE UPLOADS, AND MODEL SELECTION

const PromptForm=({
    prompt,
    onPromptChange,
    onSubmit,
    onClearAll,
    models,
    selectModel,
    onModelChange,
    isVisionModel,
    isNovaFileModel,
    onImageChange,
    onFileChange,
    imageData,
    fileAttachment,
    clearImage,
    clearFile,
    loading,
    imageInputRef,
    fileInputRef,

}) =>{
    // DISABLE SUBMIT BUTTON IF NO VALID CONTENT OR CURRENTLY LOADING

    const disableSubmit=!prompt.trim() && !(isVisionModel && imageData) || loading;

    //DISABLE CLEAR BURRON IF NOTHING TO CLEAR

    const disableClear=!prompt.trim() && !imageData && !fileAttachment;

    return(
        <div className="bg-linear-to-br from-zinc-900/90 to-zinc-800/90 border-zinc-700/50 rounded-2xl p-4 backdrop-blur-sm shadow-2xl sm:p-6">
            <form onSubmit={onSubmit}/>
                <div className="relative">
                    {/*MAIN TEXT INPUT FOR USER PRONPTS*/}

                    <textarea value={prompt} onChange={(e)=> onPromptChange(e.target.value)} placeholder='Ask me anything... I can help you build, debug, optimize, and explore your code.' className='w-full bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-500 resize-none text-sm leading-relaxed min-h-15 max-h-27.5 focus:placeholder-zinc-600 transition-colors sm:text-base sm:min-h-20' onKeyDown={(e)=>e.key=='Enter'&& (e.metakey || e.ctrlkey) && onSubmit(e)}> </textarea>


                    {/* UPLOAD BUTTONS SECTION -CONDITIONALLY SHOWN BASED ON MODEL CAPABILITIES */}

                    <div className="mt-3 mb-2 flex flex-row items-center gap-3 flex-wrap">

                        {/**/}
                    </div>
                </div>
        </div>
    )
}