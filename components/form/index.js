import { Formik, Field } from "formik";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";
import ST from "./styles";
import axios from "axios";
import { useRouter } from "next/router";

const Form = (props) => {
  const [state, setState] = useState({
    files: [],
    imagePreviewUrls: [],
    error: "",
  });

  const [city, setCity] = useState("");

  const router = useRouter();

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const handleImageChange = (e) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/13975031/reading-multiple-files-with-javascript-filereader-api-one-at-a-time

    const files = e.currentTarget.files;
    Object.keys(files).forEach(async (i) => {
      const file = files[i];
      const reader = new FileReader();
      // Resizing image and filling state
      const image = await resizeFile(file);
      reader.onloadend = (e) => {
        setState((prevState) => {
          let error;
          if (prevState.files.length > 9) {
            prevState.files.length = 9;
            prevState.imagePreviewUrls.length = 9;
            error = "Загрузить можно до 10 фотографий";
          }
          return {
            files: [...prevState.files, image],
            imagePreviewUrls: [...prevState.imagePreviewUrls, image],
            error,
          };
        });

        // I will want to push the image to cloudFront through RestFul API request somewhere in this place
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        period: 1,
        units: true,
        conditions: [],
        deposit: "",
        pledge: "",
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        // const { title, description, price, period, units, conditions, pledge, deposit } = values;
        // from states : files , city

        const response = await axios.post("/api/post-prokat", {
          payload: {
            ...values,
            city,
            files: state.files,
            dateCreated: new Date().toISOString().split("T")[0],
          },
        });

        if (response.status === 200) {
          setSubmitting(false);
          setTimeout(() => router.push(`/prokat/${response.data}`), 1000);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <ST.Form onSubmit={handleSubmit}>
          <ST.Label>
            <ST.ButtonPhoto>
              фото
              <Images size="24" color="black" />
            </ST.ButtonPhoto>
            <input
              type="file"
              name="photo"
              multiple
              onChange={handleImageChange}
              accept="image/*"
            />
          </ST.Label>
          <ST.PeriodWrapper>
            {state.imagePreviewUrls &&
              state.imagePreviewUrls.map((preview, i) => (
                <ST.AdPreview key={i} src={preview} />
              ))}
          </ST.PeriodWrapper>
          <ST.Label>
            Название
            <ST.Input
              type="text"
              placeholder="Буровая установка"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </ST.Label>
          <ST.Label>
            Описание
            <ST.TextArea
              type="text"
              placeholder="Буровая установка"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </ST.Label>
          <ST.Label>
            Город
            <ST.Location
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              onPlaceSelected={({ formatted_address }) => {
                const cityFromAddress =
                  formatted_address &&
                  formatted_address.substring(
                    0,
                    formatted_address.indexOf(",")
                  );
                cityFromAddress && setCity(cityFromAddress);
              }}
              value={city}
              language="ru"
              onChange={(e) => {
                setCity(e.currentTarget.value);
              }}
            />
          </ST.Label>
          <ST.Label>
            Цена
            <ST.Input
              type="number"
              name="price"
              placeholder="0"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
          </ST.Label>
          <ST.PeriodWrapper>
            <ST.LabelPeriod>
              Период
              <ST.InputPeriod
                type="number"
                name="period"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.period}
              />
              <ST.InputRange
                type="range"
                min="1"
                max={values.units ? "30" : "24"}
                name="period"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.period}
              />
            </ST.LabelPeriod>
            <ST.CheckboxWrapper>
              {values.units ? "дни" : "часы"}
              <ST.CheckBoxLabel>
                <input
                  type="checkbox"
                  name="units"
                  onChange={handleChange}
                  checked={values.units}
                />
                <span />
              </ST.CheckBoxLabel>
            </ST.CheckboxWrapper>
          </ST.PeriodWrapper>

          <ST.ConditionsLabel>
            <ST.CheckBoxLabel color="#05668d">
              <Field type="checkbox" name="conditions" value="deposit" />
              <span />
              Залог
            </ST.CheckBoxLabel>

            <ST.CheckBoxLabel color="#f7d6e0">
              <Field type="checkbox" name="conditions" value="terms" />
              <span />
              Договор
            </ST.CheckBoxLabel>
            <ST.CheckBoxLabel color="#faf3dd">
              <Field type="checkbox" name="conditions" value="pledge" />
              <span />
              Другое
            </ST.CheckBoxLabel>
          </ST.ConditionsLabel>
          {values.conditions.includes("deposit") && (
            <ST.Label>
              Залог (грн)
              <ST.Input
                type="number"
                name="deposit"
                placeholder="укажите сумму залога"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deposit}
              />
            </ST.Label>
          )}
          {values.conditions.includes("pledge") && (
            <ST.Label>
              Укажите ваши условия
              <ST.Input
                type="text"
                name="pledge"
                placeholder="например: водительские права"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pledge}
              />
            </ST.Label>
          )}
          {state.error}
          {errors.title && touched.title && errors.title}
          <ST.ButtonSubmit type="submit" disabled={isSubmitting}>
            Отправить
            <ChevronDoubleRight size={16} color="black" />
          </ST.ButtonSubmit>
        </ST.Form>
      )}
    </Formik>
  );
};

export default Form;
