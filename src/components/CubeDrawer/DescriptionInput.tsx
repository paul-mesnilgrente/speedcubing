import { ReactNode, useState } from "react";
import drawingStyles from './DrawingTools.module.css';
import clsx from 'clsx';

export default function DescriptionInput({value, onChange}) : ReactNode {
  const [inputValue, setInputValue] = useState(value);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        console.log('Cube description copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const validateInput = (inputValue: string): boolean => {
    const errors = [];
    const validCharacters = /^[wygbroG\s]+$/;
    const expectedLength = value.replace(/\s+/g, '').length; // Match initial length without spaces
    if (inputValue.replace(/\s+/g, '').length !== expectedLength) {
      errors.push(`Input must be ${expectedLength} characters long (excluding spaces).`);
    }
    if (!validCharacters.test(inputValue)) {
      errors.push('Input contains invalid characters. Only "w", "y", "g", "b", "r", "o", "G", and spaces are allowed.');
    }
    if (errors.length > 0) {
      setErrorMessages(errors);
      return false;
    }
    setErrorMessages([]);
    return true;
  };

  const handleInputChangeWithValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (validateInput(value)) {
      onChange(event);
    }
  };

  return (
    <div className={drawingStyles['drawing-tools__description']}>
      <div className={drawingStyles['drawing-tools__input-container']}>
        <label htmlFor="cube_description" className="hide">Cube description</label>
        <input
          name="cube_description"
          type="text"
          onChange={handleInputChangeWithValidation}
          value={inputValue}
          className={clsx(drawingStyles['drawing-tools__input'], { [drawingStyles['drawing-tools__input--error']]: errorMessages.length > 0 })}
        />
        <button
          aria-label="Copy cube description"
          className={clsx(drawingStyles["color-button"], drawingStyles["color-button--action"])}
          onClick={handleCopy}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z" />
          </svg>
        </button>
      </div>
      {errorMessages.length > 0 &&
        <ul className={drawingStyles['drawing-tools__errors']}>
          {errorMessages.map((error, index) => (
            <li key={index}>
              {error}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
