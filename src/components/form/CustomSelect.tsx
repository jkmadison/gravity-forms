import { forwardRef, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Select = forwardRef<any, any>((props, ref) => {
  const { field, onChange, name } = props;
  const [selected, setSelected] = useState({ text: "Select", value: "" });

  return (
    <Listbox
      ref={ref}
      value={selected}
      onChange={(val) => {
        setSelected(field.choices.find((choice: any) => choice.value === val));
        onChange(val);
      }}
    >
      {({ open }) => (
        <div>
          <Label className="block text-gray-900">{name}</Label>
          <div className="relative">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.text}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {field.choices.map((choice: any) => (
                  <ListboxOption key={choice.value} value={choice.value}>
                    {({ selected, focus }) => (
                      <>
                        <div
                          className={`flex items-center py-1.5 pl-3 ${
                            focus ? "bg-gray-300" : ""
                          }`}
                        >
                          <span>{choice.text}</span>
                        </div>

                        {selected ? (
                          <span>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
});

export default Select;
