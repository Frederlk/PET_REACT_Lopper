import { FC, useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import Input from "../../_components/Input";

interface TouchFormValues {
    email: string;
    name: string;
    text: string;
}

const initialValues: TouchFormValues = { name: "", email: "", text: "" };

const validationScheme = Yup.object({
    email: Yup.string().email("Invalid Email").required("Requried!"),
    name: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
    text: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
});

const Touch: FC = () => {
    const [sended, setSended] = useState(false);

    useEffect(() => {
        sended &&
            setTimeout(() => {
                setSended(false);
            }, 5000);
    }, [sended]);

    return (
        <section className="touch">
            <div className="touch__container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationScheme}
                    onSubmit={(values, { resetForm }) => {
                        values = {
                            ...values,
                        };
                        resetForm();
                        setSended(true);
                        console.log(JSON.stringify(values, null, 2));
                    }}
                >
                    <FormikForm className="touch__form">
                        <h3 className="touch__title">Get in touch with us</h3>
                        <div className="touch__flex">
                            <div className="touch__column">
                                <div className="touch__input-wrap">
                                    <label htmlFor="touch-name" className="touch__label">
                                        Your name
                                    </label>
                                    <Input
                                        className={`touch__input ${sended ? "_success" : ""}`}
                                        placeholder="Your name"
                                        type="text"
                                        name="name"
                                        id="touch-name"
                                    />
                                </div>
                                <div className="touch__input-wrap">
                                    <label htmlFor="touch-email" className="touch__label">
                                        Your email
                                    </label>
                                    <Input
                                        className={`touch__input ${sended ? "_success" : ""}`}
                                        placeholder="Your email"
                                        type="text"
                                        name="email"
                                        id="touch-email"
                                    />
                                </div>
                            </div>
                            <div className="touch__column textarea">
                                <div className="touch__input-wrap">
                                    <label htmlFor="touch-text" className="touch__label">
                                        Your message
                                    </label>
                                    <Input
                                        id="touch-text"
                                        textarea
                                        className={`touch__input touch__input_textarea ${
                                            sended ? "_success" : ""
                                        }`}
                                        placeholder="Write your message"
                                        type="text"
                                        name="text"
                                    />
                                    {sended && <div className="touch__sended">Message sended!</div>}
                                </div>
                                <button type="submit" className="touch__btn btn btn_rg">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </FormikForm>
                </Formik>
            </div>
        </section>
    );
};

export default Touch;
