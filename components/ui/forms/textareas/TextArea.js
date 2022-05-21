export const TextArea = ({ value, variant, placeholder }) => {
    return (
        <textarea
            value={value}
            variant={variant}
            placeholder={placeholder}
            className={`textarea-${variant}`}
        />
    )
}
