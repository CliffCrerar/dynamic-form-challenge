import Selectinput from "./vuyanes-select";

export default function Form(props) {
    console.log('props: ', props);

    function Delector(controlType) {
        switch(controlType){
            case 'select': return <Selectinput/>;
            case 'textarea': return <TextArea/>;
        }
    }


    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.subHeading}</h2>
            <form action={props.method} method={props.action}>
                {Delector(props)}
            </form>
        </div>
    )
}