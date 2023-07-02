type Props = {
    body: string
}

const ContentBody: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col gap-5 text-gray-700">
            {props.body.split('\n').map(text => (
                <p key={text}>{text}</p>
            ))}
        </div>
    )
}

export default ContentBody