import PropTypes from 'prop-types'

function InputInfoRegister({label,title, inputValue, setInputValue }) {
    return (
        <div className="flex flex-col w-full">
            <label className="block text-xl font-bold mt-2">{label}</label>
            <input
                type="text"
                className="mt-2 p-3 border border-gray-300 rounded"
                placeholder={title}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

InputInfoRegister.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default InputInfoRegister
