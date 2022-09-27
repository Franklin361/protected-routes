interface Props { children: JSX.Element | JSX.Element[] }
export const Layout = ({ children }: Props) => {
    return (
        <div>
            <h1>Protected Routes with <br /> <span>React Router</span></h1>
            {children}

            <div className="logo">
                <img src="https://cdn.svgporn.com/logos/react-router.svg" alt="react-router" />
            </div>
        </div>
    )
}