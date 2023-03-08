interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            Hi there!{color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProps> = ( { color } ) => {
    return <div>{color} this is ChildAsFC</div>;
}

ChildAsFC.displayName