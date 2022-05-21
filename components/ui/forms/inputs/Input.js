export const Input = ({ type, value, variant, placeholder }) => {
    return (
        <input
            type={type}
            value={value}
            variant={variant}
            placeholder={placeholder}
            className={`input-${variant}`}
        />
    )
}
