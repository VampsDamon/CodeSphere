import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../assets/videos/intro.mp4";
const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures=[
        {
            _id:'sasasds1',
            title:'Sample1',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds2',
            title:'Sample2',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds3',
            title:'Sample3',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds4',
            title:'Sample4',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds5',
            title:'Sample5',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds6',
            title:'Sample6',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds7',
            title:'Sample7',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
        {
            _id:'sasasds8',
            title:'Sample8',
            description:'This is Sample Description for the Video Lecture.',
            video:{
               url:introVideo
            }
        },
    ]

  return (
    <Grid minH={"90vh"} templateColumns={["1fr","1fr", "3fr 1fr"]}>
      <Box >
        <video
        width={'100%'}
          controls
          muted
          src={introVideo}
          controlsList="nodownload fullscreen remoteplayback"
          disablePictureInPicture
         disableRemotePlayback
        />
        <Heading m={4}>{`#${lectureNumber+1} ${lectures[lectureNumber].title}`}</Heading>
        <Heading m={4} children="Description"/>
        <Text m={4}>{`${lectures[lectureNumber].description}`}</Text>
      </Box>
      <VStack>
        {
            lectures.map((lecture,index)=>(
                <button
                style={{
                    width:'100%',
                    padding:"1rem",
                    textAlign:"center",
                    margin:0,
                    borderBottom:"1px solid rgba(0,0,0,0.2"

                }}
                onClick={()=>setLectureNumber(index)}
                >
                    <Text>
                        #{index + 1} {lecture.title}
                    </Text>
                </button>
            ))
        }
      </VStack>
    </Grid>
  );
}

export default CoursePage