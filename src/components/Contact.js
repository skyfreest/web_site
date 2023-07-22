
function Contact() {
    return  (
    <div className='content'>
        <h2><PageName toName="Contact"/></h2>
    </div>
    
    )
}

function PageName(props){
    return <div> {props.toName}</div>
}

export default Contact;