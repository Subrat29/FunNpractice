import React from 'react'
import PostCard from './components/PostCard'
import PostCard2 from './components/PostCard2'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Image, Stack, Heading, Text, Button, Center } from '@chakra-ui/react';

function App2() {
    return (
        <div className="flex flex-col w-full">
            <div className="grid gap-4 grid-cols-1 my-2 w-full">
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default App2
