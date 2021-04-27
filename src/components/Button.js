const Button = ({color, title}) => {
    return (
        <button style={{ backgroundColor: color }} className='btn'>
            {title}
        </button>
    )
}

export default Button
