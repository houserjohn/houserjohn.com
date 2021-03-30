const Box = () => {

    const on_click = (e: any) => {
        console.log("Clicked")
    }

    return (
        <p onClick={on_click} style={{backgroundColor: "teal", width: "50%", height: "50px", margin: "0px 0px", display: "inline-block"}}> </p>
    );
}

export default Box;