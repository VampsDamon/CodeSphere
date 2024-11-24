import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from "../../assets/images/cursor.png"
import SideBar from '../SideBar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'


const DataBox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={["full", "80%","50%" ,"30%"]}
    boxShadow="-2px 0px 10px rgba(107,70,193,0.5)"
    p={8}
    borderRadius={"lg"}
    mx={'auto'}
  >
    <Text children={title} />
    <HStack>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack spacing={6}>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
      <Text opacity={.8} children="Since Last Month"/>
  </Box>
);


const Bar=({title,value,profit})=>(
    <Box py={4} px={[0,20]}>
        <Heading size={'sm'} children={title} mb={2}/>
        <HStack w={'full'} alignItems={'center'}  >
        <Text>{profit?0:`-${value}`}%</Text>
        <Progress w={'full'} value={profit?value:1} colorScheme={profit?"purple":"red"}/>
        <Text>{value>100?value:100}%</Text>
        </HStack>
    </Box>
)

const Dashboard = () => {

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "1fr", "5fr 1fr"]}
      overflowX={"hidden"}
    >
      <Box  overflowX={'hidden'} boxSizing="border-box" py={16} px={["4", "4", "0"]}>
        <Text opacity={0.5} textAlign={"center"}>
          Last change was on {String(new Date()).split("G")[0]}{" "}
        </Text>
        <Heading
          ml={["0", "0", "16"]}
          mb={16}
          textAlign={["center", "center", "left"]}
        >
          Dashboard
        </Heading>
        <Stack
          minH={24}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          alignItems={["center"]}
          direction={["column", "row"]}
          gap={4}
        >
          <DataBox title="Views" qty={123} qtyPercentage={30} profit={true} />
          <DataBox title="Users" qty={23} qtyPercentage={30} profit={true} />
          <DataBox
            title="Subscription"
            qty={12}
            qtyPercentage={30}
            profit={false}
          />
        </Stack>

        <Box
          
         m={[10,10,20]} 
        
          borderRadius={"lg"}
          
        w={'80%'}
        p={[2,2,8]}
          boxShadow={"-2px 0px 10px rgba(107,70,193,0.5)"}

        >
          <Heading
            textAlign={["center","center" ,"left"]}
            size={"md"}
            children="Views Graph"
            pt={[8, 0]}
            
          />

          <LineChart/>
        </Box>

        <Stack
         alignItems={'center'}
         justifyContent={'center'}
        direction={['column','column','row']}
        >
          <Box w={["full","full",'60%']} p={4}>
            
            <Heading
              textAlign={["center", "left"]}
              size={"md"}
              children="Progress Bar"
              my={8}
              ml={[0, 16]}
            />
            
            <Box>
                <Bar  profit={true}  title="Views" value={30}/>
                <Bar  profit={true} title="Users" value={78}/>
                <Bar  profit={false} title="Subscription" value={20}/>
            </Box>
             
          </Box>
             <Box p={4} boxSizing='border-box' py={4} >
                 <Heading  textAlign={'center'} size={'md'} >
                    Users
                 </Heading>
                <DoughnutChart/>
             </Box>
        </Stack>
      </Box>
      <SideBar   />
    </Grid>
  );
}

export default Dashboard