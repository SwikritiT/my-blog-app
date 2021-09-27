import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">Blog</span>
            </div>  
            <img 
                className="headerImg" 
                src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=" Header Image"/>       
        </div>
    )
}
