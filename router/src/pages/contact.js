import {useParams} from 'react-router'
function Contact() {
    const {name} = useParams();

    return ( 
        <div>
            Contact Us...
            <br/>
            welcome {name}
        </div>
     );
}

export default Contact;