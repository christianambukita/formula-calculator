export default function listToButtons(buttonList, callback, style, idPrefix){
    return buttonList.map(button => 
        <div 
            id={idPrefix+button}
            key={idPrefix+button}
            className={style}
            onClick={()=>callback(button)}
        >
            {button}
        </div>
    );
}