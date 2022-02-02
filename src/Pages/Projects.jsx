import React from 'react';
import BoxCard from '../Components/BoxCard';
import visualAlgorithmImage from '../Assets/Visual Sorting Algorithm.png'
import { Box, Text, Heading, Image } from '@chakra-ui/react';


const Projects = () => {
  function CardContents() {
    return (
    <>
      <Box p='6'>
              <Heading p='0' variant='videoTitle'>
                Visual Sorting Algorithm
              </Heading>
              <Image 
                src={visualAlgorithmImage}
                cursor='pointer'
                pt='3'
                onClick={() => window.open('https://ldixon2000.github.io/sorting-algorithms')}
              >

              </Image>
            </Box>
      </>
      )
  }

  return (
    <BoxCard header='Projects' Contents={CardContents} />
  );
};

export default Projects;
