export const Select = ({ value, options }) => {
    return (
        <select
            value={value}
        >
            {options.map((option, index) => (
                <option 
                    key={index}
                    value={option.value}
                >
                    {option.text}
                </option>
            ))}
        </select>
    )
}
