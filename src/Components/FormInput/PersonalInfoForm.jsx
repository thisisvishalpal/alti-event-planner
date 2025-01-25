import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const PersonalInfoForm = ({
  showHeading = true,
  errors,
  wantToEdit = false,
  register,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {showHeading && <h5 className="mb-3">{t("personalInfoForm.heading")}</h5>}

      {/* fullname */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.fullName.label")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t("personalInfoForm.fullName.placeholder")}
          disabled={!wantToEdit}
          {...register("fullName", {
            required: t("personalInfoForm.fullName.error.required"),
          })}
        />
        {errors.fullName && (
          <p className="text-danger">{errors.fullName.message}</p>
        )}
      </Form.Group>

      {/* Father name */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.fatherName.label")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t("personalInfoForm.fatherName.placeholder")}
          disabled={!wantToEdit}
          {...register("fatherName", {
            required: t("personalInfoForm.fatherName.error.required"),
          })}
        />
        {errors.fatherName && (
          <p className="text-danger">{errors.fatherName.message}</p>
        )}
      </Form.Group>

      {/* Phone number */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.phoneNumber.label")}</Form.Label>
        <Form.Control
          type="tel"
          placeholder={t("personalInfoForm.phoneNumber.placeholder")}
          disabled={!wantToEdit}
          {...register("phoneNumber", {
            required: t("personalInfoForm.phoneNumber.error.required"),
            pattern: {
              value: /^[0-9]{10}$/,
              message: t("personalInfoForm.phoneNumber.error.invalid"),
            },
          })}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          }}
        />
        {errors.phoneNumber && (
          <p className="text-danger">{errors.phoneNumber.message}</p>
        )}
      </Form.Group>

      {/* Age */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.age.label")}</Form.Label>
        <Form.Control
          type="number"
          placeholder={t("personalInfoForm.age.placeholder")}
          disabled={!wantToEdit}
          {...register("age", {
            required: t("personalInfoForm.age.error.required"),
            min: {
              value: 18,
              message: t("personalInfoForm.age.error.min"),
            },
            max: {
              value: 99,
              message: t("personalInfoForm.age.error.max"),
            },
          })}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </Form.Group>

      {/* Gender */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.gender.label")}</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("gender", {
            required: t("personalInfoForm.gender.error"),
          })}
        >
          <option value="">{t("personalInfoForm.gender.placeholder")}</option>
          <option value="male">
            {t("personalInfoForm.gender.options.male")}
          </option>
          <option value="female">
            {t("personalInfoForm.gender.options.female")}
          </option>
          <option value="other">
            {t("personalInfoForm.gender.options.other")}
          </option>
        </Form.Select>
        {errors.gender && (
          <p className="text-danger">{errors.gender.message}</p>
        )}
      </Form.Group>

      {/* Married */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.married.label")}</Form.Label>
        <Form.Select
          disabled={!wantToEdit}
          {...register("married", {
            required: t("personalInfoForm.married.error"),
          })}
        >
          <option value="">{t("personalInfoForm.married.placeholder")}</option>
          <option value="yes">
            {t("personalInfoForm.married.options.yes")}
          </option>
          <option value="no">{t("personalInfoForm.married.options.no")}</option>
        </Form.Select>
        {errors.married && (
          <p className="text-danger">{errors.married.message}</p>
        )}
      </Form.Group>

      {/* City */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.city.label")}</Form.Label>

        <Form.Select
          disabled={!wantToEdit}
          {...register("city", { required: t("personalInfoForm.city.error") })}
        >
          <option value="">{t("personalInfoForm.city.placeholder")}</option>
          <option value="gwalior">
            {t("personalInfoForm.city.options.gwalior")}
          </option>
          <option value="bhopal">
            {t("personalInfoForm.city.options.bhopal")}
          </option>
          <option value="indore">
            {t("personalInfoForm.city.options.indore")}
          </option>
          <option value="morena">
            {t("personalInfoForm.city.options.morena")}
          </option>
          <option value="dabra">
            {t("personalInfoForm.city.options.dabra")}
          </option>
        </Form.Select>
        {errors.city && <p className="text-danger">{errors.city.message}</p>}
      </Form.Group>

      {/* Address */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.address.label")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t("personalInfoForm.address.placeholder")}
          disabled={!wantToEdit}
          {...register("address", {
            required: t("personalInfoForm.address.error"),
          })}
        />
        {errors.address && (
          <p className="text-danger">{errors.address.message}</p>
        )}
      </Form.Group>

      {/* Bio */}
      <Form.Group className="mb-3">
        <Form.Label>{t("personalInfoForm.bio.label")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t("personalInfoForm.bio.placeholder")}
          disabled={!wantToEdit}
          {...register("bio", {
            required: t("personalInfoForm.bio.error"),
          })}
        />
        <Form.Text>{t("personalInfoForm.bio.note")}</Form.Text>
        {errors.bio && <p className="text-danger">{errors.bio.message}</p>}
      </Form.Group>
    </>
  );
};
