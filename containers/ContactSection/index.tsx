import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

import * as S from './index.styles';
import { useForm } from 'react-hook-form';

const ContactSection = ({ pointer }) => {
    const [success, setSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const sendQuestion = async (data) => {
        console.log(data);
        try {
            await axios.post(
                'https://ciczau-twitter-backend-e83fca20f698.herokuapp.com/portfolio/question/send',
                { name: data.name, email: data.email, message: data.message }
            );

            setSuccess(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <S.Wrapper id="contact">
            {success ? (
                <S.Title>Question sent!</S.Title>
            ) : (
                <S.ContactWrapper>
                    <S.Title>Contact me if you have any questions</S.Title>
                    <S.ContactForm onSubmit={handleSubmit(sendQuestion)}>
                        <S.ContactInput
                            type="text"
                            placeholder="Your name"
                            {...register('name', {
                                required: 'Required',
                                maxLength: 30,
                            })}
                            valid={!errors.name}
                        />
                        <S.ContactInput
                            type="text"
                            placeholder="Email"
                            {...register('email', {
                                required: 'Required',
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                maxLength: 50,
                            })}
                            valid={!errors.email}
                        />
                        <S.ContactTextArea
                            type="text"
                            placeholder="Your question"
                            rows="5"
                            maxLength="331"
                            {...register('message', {
                                required: 'Required',
                                maxLength: 331,
                            })}
                            valid={!errors.message}
                        />
                        <S.SubmitButton type="submit" value="Send" />
                    </S.ContactForm>
                </S.ContactWrapper>
            )}
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
