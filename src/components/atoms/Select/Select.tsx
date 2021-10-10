import { Listbox } from '@headlessui/react';
import { Fragment, useMemo } from 'react';

interface SelectProps {
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
}

export const Select = (props: SelectProps) => {
  const selectedOption = useMemo(() => {
    return props.options.find((option) => option.value === props.value);
  }, [props.options, props.value]);

  return (
    <div className="relative group">
      <Listbox value={props.value} onChange={props.onChange}>
        <Listbox.Button className="border border-black group-hover:bg-black group-hover:text-white rounded-md text-black px-4 py-1">
          {selectedOption?.label ?? props.value}
        </Listbox.Button>
        <Listbox.Options className="absolute z-20 right-0 shadow-2xl">
          {props.options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    active ? 'bg-gray-100' : 'bg-white'
                  } ${selected ? 'font-bold' : ''}`}
                >
                  {option.label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
