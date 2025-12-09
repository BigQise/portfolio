
//TODO: update descriptions and add a mission section the right side of the background card

export default function Bio() {
    return (
        <div id="bio" className="bg-linear-to-b from-background to-slate-950 min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <h2 className="text-foreground text-5xl font-bold mb-12 text-center">
                Background
            </h2>
            
            <div className="max-w-5xl w-full bg-card border border-border rounded-2xl shadow-xl p-8 md:p-15">
                <div className="space-y-5 text-card-foreground">
                    <p className="text-lg leading-relaxed">
                        I am a passionate Computer Science student with a strong interest in software engineering, 
                        fullstack development, and product development. I enjoy building projects that both solve problems 
                        and allow me to express my creativity. I'm currently pursuing a Bachelor's of Science and I'm 
                        always learning new technologies as I'm currently learning React/Native, Tailwind, TypeScript and Go,
                        outside of regular coursework.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                        When I'm not coding, some things you can find me doing are lifting weights, gaming, cooking, playing guitar or drums, 
                        hiking, gardening and depending on the weather I could be either skateboarding or snowboarding.
                        Just like with coding, I love constantly picking up new hobbies and trying my hand at mastering them.
                    </p>
                </div>
            </div>
        </div>
    )
}