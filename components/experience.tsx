import { FaLessThan, FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import styled from 'styled-components';

const ReactIcon = styled(FaReact)``;

const NodeIcon = styled(FaNodeJs)``;

const MobileIcon = styled(FaMobileAlt)``;

const LeftTag = styled(FaLessThan)`
    margin: 5px;
    height: 80px;
    width: 60px;
`;
const RightTag = styled(LeftTag)`
    transform: rotate(180deg);
`;
export const experienceItems: Array<{
    icon: React.ReactNode;
    description: string;
    animate: boolean;
}> = [
    {
        icon: <ReactIcon size="100%" />,
        description:
            'I have gained extensive experience working with React and Next.js.',
        animate: true,
    },
    {
        icon: <NodeIcon size="100%" />,
        description:
            'I have extensive experience utilizing Node.js for backend development, enabling me to create scalable and efficient server-side applications.',
        animate: false,
    },
    {
        icon: <MobileIcon size="100%" />,
        description:
            'I have a strong expertise in utilizing React Native for mobile app development.',
        animate: false,
    },
    {
        icon: (
            <div style={{ display: 'flex' }}>
                <LeftTag size="100%" />
                <RightTag size="100%" />
            </div>
        ),
        description:
            'I have extensive experience with styled-components and framer-motion, creating visually appealing UI components and implementing smooth animations.',
        animate: false,
    },
];
