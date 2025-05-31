import { RevealOnScroll } from "../RevealOnScroll";

export const About = () =>{

    const frontendSkills =[
        "React", "HTML", "CSS", "JavaScript", "Tailwind" 
    ];
    const otherSkills =[
        "Python", "C/C++", "Pandas", "PostgreSQL", "IoT", "ML", "SEO" 
    ];


    return(
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20 ">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4 animate-fade-up">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all animate-revolving-blue-glow">
                    <p className="text-gray-300 mb-6">
                        Hi, I’m Aniket Acharjee, a frontend developer with a strong grasp of ReactJS, HTML, CSS, and JavaScript. Alongside web development, I have hands-on experience in IoT, ML, and embedded systems, driven by a passion for building smart, connected, and user-centric tech solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    frontendSkills.map((tech, key) =>(
                                        <span 
                                        key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Other Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    otherSkills.map((tech, key) =>(
                                        <span 
                                        key = {key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            🏫Education
                        </h3> 
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.Tech in Electronics and Telecommunication Engineering</strong> - Assam Engineering College (2021-2025)
                            </li>
                            <li>
                                <strong>Higher Secondary Education</strong> - Sai RNS Academy (2019-2021)
                            </li>
                            <li>
                                <strong>Secondary Education</strong> - South Point School (2010-2019)
                            </li>
                        </ul>        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            💼Work Experience
                        </h3>         
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Industrial Intern at National Informatics Center
                                </h4>
                                <p>
                                    Completed a 6-week Internship Program on WAN, gaining hands-on experience in digitalization initiatives in government IT systems.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Academic Intern at Jadavpur University
                                </h4>
                                <p>
                                    Designed and simulated an Operational transconductance based LDO regulator in Cadence Virtuoso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}