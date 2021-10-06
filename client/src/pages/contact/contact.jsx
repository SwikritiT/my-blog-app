import './contact.css'

export default function Contact(){
    return(
        <div className="contact">
             <form className="contactForm">
            <label>Full Name</label>
            <input 
                type="text" 
                className="contactInput" 
                placeholder="Enter your full-name....."
            />
            <label>Email</label>
            <input 
                type="text" 
                className="contactInput" 
                placeholder="Enter your email....."
            />
            <label>Message</label>
            <textarea 
                placeholder="Write your message here ...." 
                type="text" 
                className="contactInput contactText"
            ></textarea>
            <button className="contactButton">Contact</button>
        </form>
        </div>
    )
}