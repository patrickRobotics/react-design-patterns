export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}


export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color
        }} {...props}>{text}</button>
    );
}

/**
 * <Button size='large' color='red' text='hello' />
 */

export const DangerButton = partiallyApply(Button, {color:"red"});
export const BigSuccessButton = partiallyApply(Button, {size:"large", color:"green"});
