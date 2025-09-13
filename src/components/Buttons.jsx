export const Buttons = (props)=>{
    return(
        <div>
            <div onClick={clickgrandparent}>GrandParent
                <div onClick={clickparent}>Parent
                    <div onClick={props.onClick} >Child</div>
                </div>
            </div>
        </div>
    )
}

// function clickchild(event){
//     event.stopPropagation()
//     console.log("Child clicked")
// }

function clickparent(event){
    event.stopPropagation()
    console.log("parent clicked")
}

function clickgrandparent(){
    console.log("grandparent clicked")
}