type ChipProps = {
    title: string;
};

export default function Chip({ 
    title }: ChipProps) {
    return (
        <div className="rounded-2xl bg-indigo-800/80 w-fit mr-2 px-3 py-1 justify-center">
            <p className="font-sans text-m text-zinc-200">
            {title}    
            </p>
        </div>
    )
}