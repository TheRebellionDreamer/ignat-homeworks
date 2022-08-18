import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import classes from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((o, index) => (
        <option key={`${o}.${index}`} value={o} className={classes.option}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const selectClasses = classes.root + (restProps.className ? ' ' + restProps.className : '');

  return (
    <select onChange={onChangeCallback} {...restProps} className={selectClasses}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
