import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FooterIntro from '@client/common/footer/intro';
import FooterInfo from '@client/common/footer/info';
import { IInfoFooter } from '@client/common/footer/footer.types';
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance, FaYoutube } from 'react-icons/fa';
import './footer.scss';

const infoContent: IInfoFooter = {
    title: 'Information',
    content: [
        {
            name: 'About Us',
            to: '/',
        },
        {
            name: 'Careers',
            to: '/',
        },
        {
            name: 'Delivery Information',
            to: '/',
        },
        {
            name: 'Privacy Policy',
            to: '/',
        },
        {
            name: 'Terms & Condition',
            to: '/',
        },
    ],
};

const serviceContent: IInfoFooter = {
    title: 'Customer Service',
    content: [
        {
            name: 'Shipping Policy',
            to: '/',
        },
        {
            name: 'Help & Contact Us',
            to: '/',
        },
        {
            name: 'Returns & Refunds',
            to: '/',
        },
        {
            name: 'Online Stores',
            to: '/',
        },
        {
            name: 'Terms & Condition',
            to: '/',
        },
    ],
};

export const ClientFooter: FC = () => {
    return (
        <div id="wrapper-footer">
            <div id="top-footer" className="footer-main-content">
                <FooterIntro />

                <FooterInfo title={infoContent.title} content={infoContent.content} />
                <FooterInfo title={serviceContent.title} content={serviceContent.content} />
            </div>
            <div id="bottom-footer" className="footer-main-content">
                <div id="copy-right">
                    Copyright © <Link to="/">Outstock</Link> all rights reserved. Powered by <Link to="/">M</Link>
                </div>

                <div id="association-link">
                    <div className="association-icon">
                        <Link to="/">
                            <FaFacebookF />
                        </Link>
                    </div>
                    <div className="association-icon">
                        <Link to="/">
                            <FaInstagram />
                        </Link>
                    </div>
                    <div className="association-icon">
                        <Link to="/">
                            <FaTwitter />
                        </Link>
                    </div>
                    <div className="association-icon">
                        <Link to="/">
                            <FaBehance />
                        </Link>
                    </div>
                    <div className="association-icon">
                        <Link to="/">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFooter;
