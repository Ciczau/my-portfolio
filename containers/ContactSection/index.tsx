import {
    FaEnvelope,
    FaGithub,
    FaGithubSquare,
    FaInstagram,
    FaInstagramSquare,
    FaMailBulk,
} from 'react-icons/fa';
import * as S from './index.styles';
import { useState } from 'react';
const ContactSection = ({ pointer }) => {
    const [form, setForm] = useState<{
        name: string;
        email: string;
        message: string;
    }>({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleRedirect = (link: string) => {
        window.open(link, '_blank');
    };
    return (
        <S.Wrapper id="contact">
            <S.ContactWrapper>
                <S.Title>Contact me if you have any questions</S.Title>
                <S.ContactForm>
                    <S.ContactInput
                        type="text"
                        placeholder="Your name"
                        name="name"
                        onChange={handleChange}
                    />
                    <S.ContactInput
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <S.ContactTextArea
                        name="message"
                        type="text"
                        placeholder="Your question"
                        rows="5"
                        maxLength="331"
                        onChange={handleChange}
                    />
                    <S.SubmitButton type="submit" />
                </S.ContactForm>
            </S.ContactWrapper>
            <S.SocialMediaWrapper>
                <S.Title>Or catch me on my social media</S.Title>
                <S.Socials>
                    <FaGithub
                        color="white"
                        onMouseEnter={() => (pointer = true)}
                        onMouseLeave={() => (pointer = false)}
                        size="20%"
                        onClick={() =>
                            handleRedirect('https://github.com/Ciczau')
                        }
                    />
                    <FaInstagram
                        color="white"
                        onMouseEnter={() => (pointer = true)}
                        onMouseLeave={() => (pointer = false)}
                        size="20%"
                        onClick={() =>
                            handleRedirect('https://instagram.com/_wvktor_/')
                        }
                    />
                    <FaEnvelope
                        color="white"
                        onMouseEnter={() => (pointer = true)}
                        onMouseLeave={() => (pointer = false)}
                        size="20%"
                        onClick={() =>
                            (window.location.href =
                                'mailto:wiktor.michalski@outlook.com')
                        }
                    />
                </S.Socials>
            </S.SocialMediaWrapper>
        </S.Wrapper>
    );
};

export default ContactSection;
