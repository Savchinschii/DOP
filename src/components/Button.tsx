type ButtonPropsType = {
    nickName:string
    callback:()=>void
}

export const Button = (props:ButtonPropsType) => {
    const onclickButtonHandler =()=> {
        props.callback()
    }
    return(
            <button onClick={onclickButtonHandler}>{props.nickName}</button>
    )
}