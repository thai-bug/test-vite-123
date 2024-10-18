/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "antd";
import { FC } from "react";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

interface FormControllerProps {
  control: any;
  rules?:
  | Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >
  | undefined;
  render: (fields?: any) => any;
  name: string;
  defaultValue?: any;
}

export const FormController: FC<FormControllerProps> = ({
  control,
  rules,
  name,
  render,
  defaultValue,
}) => {
  const { getFieldState } = useFormContext();

  const { error } = getFieldState(name)

  return (
    <>
      <Controller
        defaultValue={defaultValue}
        control={control}
        render={render}
        name={name}
        rules={rules}
      />

      <div>
        {error && error?.message && (
          <Typography.Text type="danger">
            {error?.message as string}
          </Typography.Text>
        )}
      </div>
      <br />
    </>
  );
};
