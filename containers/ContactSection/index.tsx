import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

import * as S from './index.styles';

const ContactSection = ({ pointer }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleChange = (name: string, value: string) => {
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
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
                        onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                        }
                    />
                    <S.ContactInput
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                        }
                    />
                    <S.ContactTextArea
                        name="message"
                        type="text"
                        placeholder="Your question"
                        rows="5"
                        maxLength="331"
                        onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                        }
                    />
                    <S.SubmitButton type="submit" value="Send" />
                </S.ContactForm>
            </S.ContactWrapper>
            <S.SocialMediaWrapper>
                <S.Title>Or catch me on my social media</S.Title>
                <S.Socials>
                    <S.LinkElement
                        href="https://github.com/Ciczau"
                        target="_blank"
                    >
                        <FaGithub
                            color="white"
                            onMouseEnter={() => (pointer = true)}
                            onMouseLeave={() => (pointer = false)}
                            size="60%"
                        />
                    </S.LinkElement>

                    <S.LinkElement
                        href="https://instagram.com/_wvktor_"
                        target="_blank"
                    >
                        <FaInstagram
                            color="white"
                            onMouseEnter={() => (pointer = true)}
                            onMouseLeave={() => (pointer = false)}
                            size="60%"
                        />
                    </S.LinkElement>

                    <S.LinkElement href="mailto:wiktor.michalski@outlook.com">
                        <FaEnvelope
                            color="white"
                            onMouseEnter={() => (pointer = true)}
                            onMouseLeave={() => (pointer = false)}
                            size="60%"
                        />
                    </S.LinkElement>
                </S.Socials>
            </S.SocialMediaWrapper>
        </S.Wrapper>
    );
};

export default ContactSection;
