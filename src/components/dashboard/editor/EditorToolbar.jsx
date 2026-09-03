const tools=[
    "B",
    "I",
    "H2",
    "H3",
    "🔗",
    "🖼",
    "☷"
];
export default function EditorToolbar(){
    function execute(command){
        document.execCommand(
            command,
            false,
            null
        );
    }
    return (
        <div className="editor-toolbar">
            {
                tools.map(tool=>(
                    <button
                        key={tool}
                        className="tool-btn"
                        onClick={()=>{
                            if(tool==="B")
                                execute("bold");
                            if(tool==="I")
                                execute("italic");
                            if(tool==="🔗")
                                execute("createLink");
                        }}
                    >
                        {tool}
                    </button>
                ))
            }
        </div>
    );
}