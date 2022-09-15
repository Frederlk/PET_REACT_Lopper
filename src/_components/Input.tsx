import { useField } from "formik";

const Input = ({ ...props }: { [x: string]: any; name: string }) => {
    const [field, meta] = useField(props);

    const classNames = `input ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`;

    return (
        <>
            <input {...props} {...field} className={classNames} />
            {meta.touched && meta.error ? <div className="_input__error">{meta.error}</div> : null}
        </>
    );
};

export default Input;
