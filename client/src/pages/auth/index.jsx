import React, { useState } from 'react'
import victory from "../../assets/victory.svg"
import Background from "../../assets/login2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


const Auth = () => {
    // States for input fields
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    // handle function for login
    const handleLogin = async () => {

    }
    // handle function for signUp
    const handleSignUp = async () => {

    }

    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className='h-[80vh] bg-white border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex items-center justify-center '>
                            <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
                            <img src={victory} alt='emoji' className='h-[100px]' />
                        </div>
                        <p className='font-medium text-center'>Fill in the Details to get started the best Chat app...!</p>
                    </div>
                    <div className=' flex  items-center justify-center w-full'>
                        <Tabs defaultValue="Login" className="w-3/4">
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger value="Signup" className="data-[state-active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">
                                    Signup
                                </TabsTrigger>
                                <TabsTrigger value="Login" className="data-[state-active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">
                                    Login
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="Signup">
                                <Input placeholder="Email" type="email" className="rounded-full p-4 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input placeholder="Password" type="password" className="rounded-full p-4 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Input placeholder="Confirm Password" type="password" className="rounded-full p-4 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <Button className="rounded-full p-6 w-full" onClick={handleSignUp} >SignUp</Button>
                            </TabsContent>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="Login">
                                <Input placeholder="Email" type="email" className="rounded-full p-4 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input placeholder="Password" type="password" className="rounded-full p-4 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Button className="rounded-full p-6 w-full" onClick={handleLogin}>Login</Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className='hidden xl:flex justify-center items-center'>
                    <img src={Background} alt="background" className='' />
                </div>
            </div>
        </div>
    )
}

export default Auth
