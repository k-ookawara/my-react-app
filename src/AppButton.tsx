function MyButton({ title }: { title: string }) {
    return (
        <button>{title}</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcom to myApp</h1>
            <MyButton title="I'm a button" />
        </div>
    );
}