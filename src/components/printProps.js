export const printProps = Component => {
    return (props) => {
        console.log(props);

        return <Component { ...props} />
    }
}


/**
 * Same as 
 * export const userInfoWrapped = (props) => {
 *      console.log(props);
 *      return (props) => {
 *          return <Component { ...props} />
 *  
 * }
 * 
 * **/