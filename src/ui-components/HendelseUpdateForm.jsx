/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getHendelse } from "../graphql/queries";
import { updateHendelse } from "../graphql/mutations";
const client = generateClient();
export default function HendelseUpdateForm(props) {
  const {
    id: idProp,
    hendelse: hendelseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    navn: "",
    sted: "",
    miljoe: "",
    dato: "",
    type: "",
    handleliste: "",
    pakkeliste: "",
  };
  const [navn, setNavn] = React.useState(initialValues.navn);
  const [sted, setSted] = React.useState(initialValues.sted);
  const [miljoe, setMiljoe] = React.useState(initialValues.miljoe);
  const [dato, setDato] = React.useState(initialValues.dato);
  const [type, setType] = React.useState(initialValues.type);
  const [handleliste, setHandleliste] = React.useState(
    initialValues.handleliste
  );
  const [pakkeliste, setPakkeliste] = React.useState(initialValues.pakkeliste);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = hendelseRecord
      ? { ...initialValues, ...hendelseRecord }
      : initialValues;
    setNavn(cleanValues.navn);
    setSted(cleanValues.sted);
    setMiljoe(cleanValues.miljoe);
    setDato(cleanValues.dato);
    setType(cleanValues.type);
    setHandleliste(cleanValues.handleliste);
    setPakkeliste(cleanValues.pakkeliste);
    setErrors({});
  };
  const [hendelseRecord, setHendelseRecord] = React.useState(hendelseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHendelse.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHendelse
        : hendelseModelProp;
      setHendelseRecord(record);
    };
    queryData();
  }, [idProp, hendelseModelProp]);
  React.useEffect(resetStateValues, [hendelseRecord]);
  const validations = {
    navn: [],
    sted: [],
    miljoe: [],
    dato: [],
    type: [],
    handleliste: [],
    pakkeliste: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          navn: navn ?? null,
          sted: sted ?? null,
          miljoe: miljoe ?? null,
          dato: dato ?? null,
          type: type ?? null,
          handleliste: handleliste ?? null,
          pakkeliste: pakkeliste ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateHendelse.replaceAll("__typename", ""),
            variables: {
              input: {
                id: hendelseRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "HendelseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Navn"
        isRequired={false}
        isReadOnly={false}
        value={navn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn: value,
              sted,
              miljoe,
              dato,
              type,
              handleliste,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.navn ?? value;
          }
          if (errors.navn?.hasError) {
            runValidationTasks("navn", value);
          }
          setNavn(value);
        }}
        onBlur={() => runValidationTasks("navn", navn)}
        errorMessage={errors.navn?.errorMessage}
        hasError={errors.navn?.hasError}
        {...getOverrideProps(overrides, "navn")}
      ></TextField>
      <TextField
        label="Sted"
        isRequired={false}
        isReadOnly={false}
        value={sted}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted: value,
              miljoe,
              dato,
              type,
              handleliste,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.sted ?? value;
          }
          if (errors.sted?.hasError) {
            runValidationTasks("sted", value);
          }
          setSted(value);
        }}
        onBlur={() => runValidationTasks("sted", sted)}
        errorMessage={errors.sted?.errorMessage}
        hasError={errors.sted?.hasError}
        {...getOverrideProps(overrides, "sted")}
      ></TextField>
      <TextField
        label="Miljoe"
        isRequired={false}
        isReadOnly={false}
        value={miljoe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted,
              miljoe: value,
              dato,
              type,
              handleliste,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.miljoe ?? value;
          }
          if (errors.miljoe?.hasError) {
            runValidationTasks("miljoe", value);
          }
          setMiljoe(value);
        }}
        onBlur={() => runValidationTasks("miljoe", miljoe)}
        errorMessage={errors.miljoe?.errorMessage}
        hasError={errors.miljoe?.hasError}
        {...getOverrideProps(overrides, "miljoe")}
      ></TextField>
      <TextField
        label="Dato"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted,
              miljoe,
              dato: value,
              type,
              handleliste,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.dato ?? value;
          }
          if (errors.dato?.hasError) {
            runValidationTasks("dato", value);
          }
          setDato(value);
        }}
        onBlur={() => runValidationTasks("dato", dato)}
        errorMessage={errors.dato?.errorMessage}
        hasError={errors.dato?.hasError}
        {...getOverrideProps(overrides, "dato")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted,
              miljoe,
              dato,
              type: value,
              handleliste,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Handleliste"
        isRequired={false}
        isReadOnly={false}
        value={handleliste}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted,
              miljoe,
              dato,
              type,
              handleliste: value,
              pakkeliste,
            };
            const result = onChange(modelFields);
            value = result?.handleliste ?? value;
          }
          if (errors.handleliste?.hasError) {
            runValidationTasks("handleliste", value);
          }
          setHandleliste(value);
        }}
        onBlur={() => runValidationTasks("handleliste", handleliste)}
        errorMessage={errors.handleliste?.errorMessage}
        hasError={errors.handleliste?.hasError}
        {...getOverrideProps(overrides, "handleliste")}
      ></TextField>
      <TextField
        label="Pakkeliste"
        isRequired={false}
        isReadOnly={false}
        value={pakkeliste}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              sted,
              miljoe,
              dato,
              type,
              handleliste,
              pakkeliste: value,
            };
            const result = onChange(modelFields);
            value = result?.pakkeliste ?? value;
          }
          if (errors.pakkeliste?.hasError) {
            runValidationTasks("pakkeliste", value);
          }
          setPakkeliste(value);
        }}
        onBlur={() => runValidationTasks("pakkeliste", pakkeliste)}
        errorMessage={errors.pakkeliste?.errorMessage}
        hasError={errors.pakkeliste?.hasError}
        {...getOverrideProps(overrides, "pakkeliste")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || hendelseModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || hendelseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
