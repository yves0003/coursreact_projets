const ImageBlock = ({ children, crypto }) => {
    return (
        <>
            <img src={crypto.link} alt={crypto.currency_long}/>
            {children}
        </>
    );
};
  
export default ImageBlock;