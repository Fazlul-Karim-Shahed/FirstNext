import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-4">
            <div className="text-center small">
                Copyright@2023. All right reserved <Link target="_blank" className="fst-italic" href='https://fazlul-karim.web.app/'>Fazlul Karim</Link>
            </div>
        </div>
    );
}

export default Footer;