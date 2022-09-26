import React from 'react'

type ButtonProps = {
    variant: 'Primary' | 'secondry'    
} & React.ComponentProps<'button'>

// Omit keyword
// type ButtonProps = {
//     variant: 'Primary' | 'secondry'  
//     children: 'string'  
// } & Omit<React.ComponentProps<'button'>,'children'>

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <div>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </div>
    )
}
