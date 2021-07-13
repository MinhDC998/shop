import React, { FC } from 'react';
import { logoPrimary } from '@utils/images-loader';
import { BiEnvelope, BiLocationPlus, BiPhone } from 'react-icons/bi';

const FooterIntro: FC = () => {
    return (
        <div id="footer-intro">
            <img src={logoPrimary} alt="logo" id="footer-logo" />
            <div id="footer-intro__desc">
                Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to
                use and fully responsive and retina ready.
            </div>
            <div id="footer-contact">
                <ul>
                    <li>
                        <span className="contact-icons">
                            <BiLocationPlus />
                        </span>
                        Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                    </li>
                    <li>
                        <span className="contact-icons">
                            <BiEnvelope />
                        </span>
                        Email: Contact@basictheme.com
                    </li>
                    <li>
                        <span className="contact-icons">
                            <BiPhone />
                        </span>
                        Phone Number: (800) 123 456 789
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterIntro;
