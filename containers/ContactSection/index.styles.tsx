import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    scroll-snap-align: start;
`;
export const Title = styled.div`
    color: white;
    font-size: 25px;
    margin: 10px;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const ContactInput = styled.input`
    font-size: 15px;
    font-family: inherit;
    padding: 10px;
    width: 90vw;
    max-width: 500px;
    border-radius: 7px;
    outline: 0;
    border: ${(props) => (props.valid ? '0' : '1px solid red')};
    font-family: 'Martian Mono';
    z-index: 2;
    margin: 10px;
    cursor: none;
    box-shadow: 0px 0px 5px 3px #ffffff6e;
`;

export const ContactTextArea = styled.textarea`
    resize: none;
    font-size: 15px;
    padding: 10px;
    z-index: 2;
    width: 90vw;
    cursor: none;
    border: ${(props) => (props.valid ? '0' : '1px solid red')};
    max-width: 500px;
    height: auto;
    outline: 0;
    box-shadow: 0px 0px 5px 3px #ffffff6e;
    border-radius: 5px;
    margin: 10px;
    font-family: 'Martian Mono';
`;

export const SubmitButton = styled.input`
    padding: 6px 12px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border-color: blue;
    color: #fff;
    box-shadow: 0 0 40px 40px blue inset, 0 0 0 0 blue;
    transition: all 150ms ease-in-out;
    margin: 10px;
    &:hover {
        box-shadow: 0 0 10px 0 blue inset, 0 0 10px 4px blue;
        background-color: transparent;
    }
    font-family: 'Poiret One';
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Socials = styled.div`
    display: flex;
    width: 50%;
`;

export const LinkElement = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;
