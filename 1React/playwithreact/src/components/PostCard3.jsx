import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Center } from '@chakra-ui/react';

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
                        <Heading size='md'>{title}</Heading>
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
                {imageUrl && <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={imageUrl}
                    alt={title}
                />}
            </Card>
        </Center>
    );
};


{/* <Link to={`/post/${$id}`}>
<div className='w-full bg-gray-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
        {imageUrl && (
            <img src={imageUrl} alt={title} className='rounded-xl' />
        )}
    </div>
    <h2 className='text-xl font-bold'>{title}</h2>
    <p>Author: {userId}</p>
    <p>Last Update: {$updatedAt}</p>
</div>
</Link> */}

export default PostCard;
