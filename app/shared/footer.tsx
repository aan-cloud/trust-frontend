

export default function Footer() {
    return (
        <section className="flex justify-between px-28 bg-[#272727] py-6 text-white">
            <div className="flex flex-col gap-5">
                <h1 className="text-theme-1 text-2xl font-bold">Contact Us</h1>
                <ul className="max-w-64 flex flex-col gap-2">
                    <li>019-984 6648</li>
                    <li>support@remco.com.my</li>
                    <li>0pm-7pm (Mon-Sat) </li>
                    <li>No 30E, Jalan Dinar F U3/F, Taman Subang Perdana, Seksyen U3, 40150 Shah Alam, Selangor Malaysia</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
            <h1 className="text-theme-1 text-2xl font-bold">Information</h1>
            <ul className="max-w-64 flex flex-col gap-2">
                    <li>Car Model</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Term and Condition</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
            <h1 className="text-theme-1 text-2xl font-bold">Account</h1>
                <ul className="max-w-64 flex flex-col gap-2">
                    <li>Login/Register</li>
                    <li>Cart</li>
                    <li>Dashboard</li>
                    <li>My Wishlish</li>
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-theme-1 text-2xl font-bold">Follow Us on Social Media</h1>
                <p></p>
                <div className="flex gap-3" id="medsos">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/228BE6/facebook--v1.png" alt="facebook--v1"/>
                    <img width="50" height="50" src="https://img.icons8.com/glyph-neue/64/FA5252/instagram-new--v1.png" alt="instagram-new--v1"/>
                </div>
            </div>
        </section>
    )
}