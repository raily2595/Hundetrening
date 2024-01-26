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
import { getKurs } from "../graphql/queries";
import { updateKurs } from "../graphql/mutations";
const client = generateClient();
export default function KursUpdateForm(props) {
  const {
    id: idProp,
    kurs: kursModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    kursholder: "",
  };
  const [kursholder, setKursholder] = React.useState(initialValues.kursholder);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = kursRecord
      ? { ...initialValues, ...kursRecord }
      : initialValues;
    setKursholder(cleanValues.kursholder);
    setErrors({});
  };
  const [kursRecord, setKursRecord] = React.useState(kursModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getKurs.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getKurs
        : kursModelProp;
      setKursRecord(record);
    };
    queryData();
  }, [idProp, kursModelProp]);
  React.useEffect(resetStateValues, [kursRecord]);
  const validations = {
    kursholder: [],
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
          kursholder: kursholder ?? null,
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
            query: updateKurs.replaceAll("__typename", ""),
            variables: {
              input: {
                id: kursRecord.id,
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
      {...getOverrideProps(overrides, "KursUpdateForm")}
      {...rest}
    >
      <TextField
        label="Kursholder"
        isRequired={false}
        isReadOnly={false}
        value={kursholder}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              kursholder: value,
            };
            const result = onChange(modelFields);
            value = result?.kursholder ?? value;
          }
          if (errors.kursholder?.hasError) {
            runValidationTasks("kursholder", value);
          }
          setKursholder(value);
        }}
        onBlur={() => runValidationTasks("kursholder", kursholder)}
        errorMessage={errors.kursholder?.errorMessage}
        hasError={errors.kursholder?.hasError}
        {...getOverrideProps(overrides, "kursholder")}
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
          isDisabled={!(idProp || kursModelProp)}
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
              !(idProp || kursModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
