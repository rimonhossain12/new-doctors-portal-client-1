import React from 'react';
import footer from '../../../assets/images/footer.png';


const Footer = () => {
    return (
        <footer class="p-10"
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="footer">
                <div>
                    <span class="footer-title">Services</span>
                    <a href='/home' class="link link-hover">Branding</a>
                    <a href='/home' class="link link-hover">Design</a>
                    <a href='/home' class="link link-hover">Marketing</a>
                    <a href='/home' class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a href='/home' class="link link-hover">About us</a>
                    <a href='/home' class="link link-hover">Contact</a>
                    <a href='/home' class="link link-hover">Jobs</a>
                    <a href='/home' class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a href='/home' class="link link-hover">Terms of use</a>
                    <a href='/home' class="link link-hover">Privacy policy</a>
                    <a href='/home' class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;