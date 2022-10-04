import "./Wrapper.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper(props) {
    return (
        <div className='Wrapper'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}