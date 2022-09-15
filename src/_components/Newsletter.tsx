import { FC, useState, useEffect } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import Input from "./Input";

interface NewsletterFormValues {
    email: string;
}

const initialValues: NewsletterFormValues = { email: "" };
const validationScheme = Yup.object({
    email: Yup.string().email("Invalid Email").required("Requried!"),
});

export const Newsletter: FC = () => {
    const [sended, setSended] = useState(false);

    useEffect(() => {
        sended &&
            setTimeout(() => {
                setSended(false);
            }, 5000);
    }, [sended]);

    return (
        <section className="newsletter">
            <div className="newsletter__container">
                <h2 className="newsletter__title">Subscribe to our newsletter</h2>
                <p className="newsletter__text">Cras pulvinar mattis nunc sed blandit.</p>
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
                    <FormikForm className="newsletter__form">
                        <Input
                            className={`newsletter__input ${sended ? "_success" : ""}`}
                            placeholder="Enter email"
                            type="text"
                            name="email"
                        />
                        <button type="submit" className="newsletter__btn btn btn_news">
                            subscribe <span className="_icon-arrow"></span>
                        </button>
                        {sended && <div className="newsletter__subscribed">You&apos;ve subscribed!</div>}
                    </FormikForm>
                </Formik>
            </div>
        </section>
    );
};
