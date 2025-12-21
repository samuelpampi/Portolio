import "./title.css";
export function Title({text}) {
    return(
        <h2 className="title">{text}</h2>
    );
}

export function Title3({text}){
    return(
        <h3 className="title3">{text}</h3>
    );
}

export function TitleShine({children}){
    return(
        <h4 className="title-shine">{children}</h4>
    )
}