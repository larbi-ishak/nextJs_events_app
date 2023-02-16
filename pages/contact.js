import contactStyles from "@/styles/contact.module.css";
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>ContactPage</title>
            </Head>
            <p>
                Contact
                <br />
                {/* even if there is another css file called in another component for example globals.css have .code class
                but we have .code in contact.module.css without overriding one each other , because styles are component based */}
                <i className={contactStyles.code}>
                    E-Mail: ishak.larbi@inttic.dz
                </i>
                <br />
                <i>LinkedIn: LARBI Ishak</i>
            </p>
        </>
    );
};

export default Contact;
