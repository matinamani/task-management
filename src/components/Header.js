const Header = () => {
    return (
        <header style={headerStyle}>
        <h1  style={h1Style}>
            Header
        </h1>
    </header>
    )
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
}

const h1Style = {
    margin:'0',
}

export default Header
