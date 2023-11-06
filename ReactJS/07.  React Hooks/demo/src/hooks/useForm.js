import { useState } from "react";

const useForm = (initialValues, onSubmitFunc) => {
    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues((values) => ({ ...values, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (onSubmitFunc) onSubmitFunc(values);
    };

    return {
        values,
        onChangeHandler,
        onSubmitHandler
    };
};

export default useForm;