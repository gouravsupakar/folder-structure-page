import { useState } from "react";

function Folder({explorer}){

    const [expand, setExpand] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
      };

    if(explorer.isFolder){
    return (
    <div style={{marginTop: 5 }}>
        <div class ="folder" onClick={() => setExpand(!expand)}>
            
            <span onClick={toggleOpen} style={{ cursor: 'pointer' }}>
               {isOpen ? '▼' : '▶'}
                📂{explorer.name}
            </span>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft: 25}}>
            {explorer.items.map((exp) => {
                return <Folder explorer={exp} key={exp.id}/>
            })}
        </div>
    </div>)} else {
        return<span class ="file">📄{explorer.name}</span>
    }
}


export default Folder;