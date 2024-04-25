import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Center } from '@chakra-ui/react'; // Import necessary components from Chakra UI

const PostCard = () => {
    return (
        <Center>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                p={2}
            >
                <Stack >
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Read more →
                        </Button>
                    </CardFooter>
                </Stack>
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
            </Card>
        </Center>
    );
};

export default PostCard;
