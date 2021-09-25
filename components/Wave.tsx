
let wave_style: any = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    overflow: "hidden",
    lineHeight: "0",
};

let wave_svg_style: any = {
    position: "relative",
    display: "block",
    width: "calc(169% + 1.3px)",
    height: "152px",
};

let wave_shape_fill_style_1: any = {
    fill: "#FFFFFF"
}

let wave_shape_fill_style_2: any = {
    fill: "#F3F4F6"
}

interface Wave_Props {
    inverted: boolean
}

function Wave(props: Wave_Props ) {
    return (
        <div className="relative pt-1">
            <div style={wave_style}>
                <svg style={wave_svg_style} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path style={props.inverted ? wave_shape_fill_style_2 : wave_shape_fill_style_1} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
                </svg>
            </div>
        </div>
    );
}
/*
    <div className="relative">
        <div style={wave_style}>
            <svg style={wave_svg_style} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path style={wave_shape_fill_style_2} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
            </svg>
        </div>
    </div>
*/

export default Wave;