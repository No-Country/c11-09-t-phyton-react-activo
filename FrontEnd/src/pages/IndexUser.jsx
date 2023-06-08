import { useContext } from "react";
import ProfileContext from '../context/ProfileContext'
import '../index.css';

const IndexUser = () => {
    let { profile } = useContext(ProfileContext)
    {/* <div>
            <h1>Hola de nuevo {profile.username} </h1>
        </div> */}
    return (
        <div className="grid grid-cols-12 gap-4 bg-bootcamp-background">
            <div className="col-span-7 grid-rows-4 pl-20 pr-20">
                <div className="flex items-center gap-8 mt-10">
                    <img className="h-20 rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" alt="" />
                    <p className="text-white text-xl">
                        Hola, {profile.username}</p>
                </div>
                <div className="flex flex-col items-center gap-8 m-4 justify-center">
                    <p className="text-3xl text-purple-700">Balance Total (USD)</p>
                    <p className="text-3xl font-bold text-white">8,000</p>
                </div>
                <div className="">
                    <div className="flex justify-between">
                        <p className="text-white text-xl">Objetivos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6 text-violet-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className="flex gap-8 justify-between">
                        <div className="flex flex-col gap-2 items-start justify-end bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top h-44 w-52 rounded-md mt-8 p-4">
                            <p className="text-white text-lg">Cursos</p>
                            <progress className="progress progress-white w-full" value="70" max="100"></progress>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-end bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top h-44 w-52 rounded-md mt-8 p-4">
                            <p className="text-white text-lg">Cursos</p>
                            <progress className="progress progress-white w-full" value="70" max="100"></progress>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-end bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top h-44 w-52 rounded-md mt-8 p-4">
                            <p className="text-white text-lg">Cursos</p>
                            <progress className="progress progress-white w-full" value="70" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-white text-xl">Actividad</p>
                    <div className="flex flex-col items-center gap-8 mt-4">
                        <div className="flex items-center">
                            <div>
                                <img className="h-12 rounded-full"
                                    src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-white text-xl">Café Hernandez</p>
                                <p className="text-white text-lg">5 abr. 2021</p>
                            </div>
                            <div className="ml-24">
                                <p className="text-red-700 text-xl font-bold">-100.30</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <img className="h-12 rounded-full"
                                    src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-white text-xl">Café Hernandez</p>
                                <p className="text-white text-lg">5 abr. 2021</p>
                            </div>
                            <div className="ml-24">
                                <p className="text-red-700 text-xl font-bold">-100.30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                <div className="flex flex-col gap-8 items-center pt-20">
                    <div className="flex justify-center items-center">
                        <div className="flex rounded-2xl justify-center items-center w-12 h-12 bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-bold text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-white text-xl">Café Hernandez</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex rounded-2xl justify-center items-center w-12 h-12 bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-bold text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-white text-xl">Café Hernandez</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex rounded-2xl justify-center items-center w-12 h-12 bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-bold text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-white text-xl">Café Hernandez</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex rounded-2xl justify-center items-center w-12 h-12 bg-gradient-to-t from-bootcamp-bottom to-bootcamp-top">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-bold text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-white text-xl">Café Hernandez</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-center pt-20">
                    <div className="flex flex-col p-4 bg-gradient-to-t from-black to-bootcamp-ads h-32 w-80 rounded-3xl mt-8">
                        <p className="text-yellow-400 text-lg">20% OFF</p>
                        <p className="text-white text-lg font-bold">Pagando hoy con tajeta VISA</p>
                        <p className="text-white text-lg">Incluye bancos HSBC y Santander</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IndexUser;