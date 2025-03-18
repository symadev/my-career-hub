

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10  m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Services Section */}
            <nav>
                <h6 className="footer-title text-lg font-semibold">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>

            {/* Company Section */}
            <nav>
                <h6 className="footer-title text-lg font-semibold">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            {/* Legal Section */}
            <nav>
                <h6 className="footer-title text-lg font-semibold">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>

            {/* Newsletter Section */}
            <form>
                <h6 className="footer-title text-lg font-semibold">Newsletter</h6>
                <fieldset className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join flex">
                        <input
                            type="email"
                            placeholder="username@site.com"
                            className="input input-bordered flex-1"
                        />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;
