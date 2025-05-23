import { ReactNode } from 'react'
const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            Layout
            {children}
        </div>
    )
}
export default RootLayout