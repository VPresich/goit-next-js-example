'use client';
import React from 'react';
import { Field, FieldAttributes } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

export interface InputFieldProps extends FieldAttributes<any> {
  label?: string;
}

export default function InputField({ label, ...rest }: InputFieldProps) {
  const id = React.useMemo(() => uuidv4(), []);
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300"
      />
    </div>
  );
}
