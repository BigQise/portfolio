type ChipProps = {
    title: string;
};

export default function Chip({ 
    title }: ChipProps) {
    return (
        <div className="rounded-2xl bg-indigo-800/50 w-fit h-fit mr-1 px-3 py-1 mt-2">
            <p className="font-sans text-xs lg:text-base text-zinc-300">
            {title}    
            </p>
        </div>
    )
}