import './footer.css'

const Footer = (props) => {
    return (
        <footer className={props.theme === "light"? "footerLight" : "footerDark"}>
            <p>Made by Geiciane Barham 2022
                ©</p>
        </footer>
    )
}

export default Footer;