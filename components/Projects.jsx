import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Link from 'next/link';
import Image from 'next/image';
import { imgs } from '@/app/data';
import { ExternalLink, Github } from 'lucide-react';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
     const projects = [
        {
            title: "Enrich Salon Management",
            description:
                "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
            techStack: ["HTML", "CSS", "JavaScript"],
            website: "https://enrich-salon-demo.netlify.app",
            code: "https://github.com/example/enrich-salon",
        },
        {
            title: "LeafMart – Plant Selling Website",
            description:
                "LeafMart is an e-commerce platform for buying indoor and outdoor plants, featuring a clean UI, product filters, and secure checkout.",
            techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
            website: "https://leafmart-demo.vercel.app",
            code: "https://github.com/example/leafmart",
        },
        {
            title: "AI Quiz App",
            description:
                "An AI-powered quiz app that generates questions based on topic and difficulty, with a timer and result summary page.",
            techStack: ["React", "OpenAI API", "Context API"],
            website: "https://ai-quiz-demo.vercel.app",
            code: "https://github.com/example/ai-quiz-app",
        },
        {
            title: "Civix – Citizen Engagement Dashboard",
            description:
                "Civix is a full-stack web platform that connects citizens and government, enabling issue tracking and feedback submission.",
            techStack: ["React", "Node.js", "MongoDB"],
            website: "https://civix-demo.vercel.app",
            code: "https://github.com/example/civix",
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center text-center min-h-[80%] px-4 pb-20'>
            <h1 className='title '>Projects</h1>
            
        
            <div className='flex gap-5 w-full sm:w-2/3 flex-wrap justify-center text-start ' >
                {

                    projects.map((project , idx) => (
                        <Card key={idx} className="sm:w-[48%] max-w-sm my-5 px-5  ">
                            <CardHeader className="flex flex-col ">
                                <Image 
                                    className='p-2 '
                                    width={50}
                                    height={50}
                                    alt='logo' 
                                    src={imgs.next_logo} 
                                />
                                <CardTitle className="px-0">{project.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-wrap text-start ml-6">{project.description}</CardDescription>
                            <CardContent className="flex gap-2 flex-wrap">
                                {project.techStack.map((tech , idx) => (
                                    <Button key={idx} variant="skills" size="smbt">{tech}</Button>
                                ))}
                            </CardContent>
                            <CardFooter className="flex gap-2" >
                                <Button size="smbt" variant="default" asChild>

                                    <Link href={project.website}><TbWorld /> Website</Link>
                                </Button>
                                <Button size="smbt" variant="default" asChild>
                                    <Link href={project.code}><FaGithub /> Code</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                }
                
            </div>

        </section>
    )
}

export default Projects