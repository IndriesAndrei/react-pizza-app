function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer>
            <p>{new Date().toLocaleTimeString()} - We're currently open!</p>
        </footer>
    )
}

export default Footer;