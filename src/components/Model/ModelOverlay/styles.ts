import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: sticky;
    height: 100vh;
    margin-top: -100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center
`;
